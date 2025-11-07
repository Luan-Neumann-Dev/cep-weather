import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { AddressCard } from "@/components/AddressCard";
import { WeatherCard } from "@/components/WeatherCard";
import { fetchAddress, fetchWeather } from "@/services/api";
import { toast } from "@/hooks/use-toast";
import { Cloud } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addressData, setAddressData] = useState<any>(null);
  const [weatherData, setWeatherData] = useState<any>(null);

  const handleSearch = async (cep: string) => {
    setIsLoading(true);
    setAddressData(null);
    setWeatherData(null);

    try {
      // Buscar endereço
      const address = await fetchAddress(cep);
      setAddressData(address);

      // Buscar clima
      try {
        const weather = await fetchWeather(address.localidade);
        setWeatherData(weather);
      } catch (weatherError) {
        toast({
          title: "Aviso",
          description: "Endereço encontrado, mas não foi possível obter o clima. Configure sua API key do OpenWeather.",
        });
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Erro ao buscar informações",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-sky overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Cloud className="h-12 w-12 text-white" />
              <h1 className="text-5xl font-bold text-white">WeatherCEP</h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Consulte endereços pelo CEP e veja as condições climáticas em tempo real
            </p>
          </div>

          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4 py-12">
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-muted-foreground">Buscando informações...</p>
          </div>
        )}

        {!isLoading && (addressData || weatherData) && (
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {addressData && <AddressCard address={addressData} />}
            {weatherData && <WeatherCard weather={weatherData} />}
          </div>
        )}

        {!isLoading && !addressData && !weatherData && (
          <div className="text-center py-12 text-muted-foreground">
            <Cloud className="h-16 w-16 mx-auto mb-4 opacity-20" />
            <p>Digite um CEP para começar a busca</p>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="container mx-auto px-4 py-8 border-t border-border">
        <div className="max-w-2xl mx-auto text-center text-sm text-muted-foreground">
          <p className="mb-2">
            <strong>Nota:</strong> Para utilizar a funcionalidade de clima, você precisa configurar sua API key do OpenWeather.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

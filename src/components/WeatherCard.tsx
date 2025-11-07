import { Cloud, Droplets, Wind, Thermometer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WeatherCardProps {
  weather: {
    temp: number;
    feels_like: number;
    humidity: number;
    description: string;
    wind_speed: number;
    city: string;
  };
}

export const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <Card className="shadow-card backdrop-blur-sm bg-gradient-card border-primary/10 animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Cloud className="h-5 w-5 text-primary" />
          Clima em {weather.city}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-5xl font-bold text-primary">{Math.round(weather.temp)}°</p>
            <p className="text-sm text-muted-foreground capitalize mt-1">
              {weather.description}
            </p>
          </div>
          <Cloud className="h-20 w-20 text-primary/30" />
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
          <div className="flex flex-col items-center gap-1">
            <Thermometer className="h-4 w-4 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Sensação</p>
            <p className="font-semibold text-foreground">{Math.round(weather.feels_like)}°</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Droplets className="h-4 w-4 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Umidade</p>
            <p className="font-semibold text-foreground">{weather.humidity}%</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Wind className="h-4 w-4 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Vento</p>
            <p className="font-semibold text-foreground">{weather.wind_speed} km/h</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

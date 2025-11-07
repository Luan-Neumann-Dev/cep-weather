import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface SearchBarProps {
  onSearch: (cep: string) => void;
  isLoading: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [cep, setCep] = useState("");

  const formatCep = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 5) {
      return numbers;
    }
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCep = cep.replace(/\D/g, "");
    
    if (cleanCep.length !== 8) {
      toast({
        title: "CEP inválido",
        description: "Por favor, digite um CEP válido com 8 dígitos.",
        variant: "destructive",
      });
      return;
    }

    onSearch(cleanCep);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto animate-fade-in">
      <div className="relative flex gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Digite o CEP (ex: 01310-100)"
            value={cep}
            onChange={(e) => setCep(formatCep(e.target.value))}
            maxLength={9}
            className="h-14 pl-12 pr-4 text-lg shadow-card backdrop-blur-sm bg-card/90 border-primary/20 focus:border-primary"
            disabled={isLoading}
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="h-14 px-8 bg-gradient-sky shadow-elegant hover:shadow-card transition-all duration-300"
        >
          {isLoading ? "Buscando..." : "Buscar"}
        </Button>
      </div>
    </form>
  );
};

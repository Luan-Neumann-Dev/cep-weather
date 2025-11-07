import { MapPin, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AddressCardProps {
  address: {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  };
}

export const AddressCard = ({ address }: AddressCardProps) => {
  return (
    <Card className="shadow-card backdrop-blur-sm bg-gradient-card border-primary/10 animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Home className="h-5 w-5 text-primary" />
          Endereço Encontrado
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
          <div className="flex-1">
            <p className="font-medium text-foreground">{address.logradouro}</p>
            {address.bairro && (
              <p className="text-sm text-muted-foreground">{address.bairro}</p>
            )}
            <p className="text-sm text-muted-foreground">
              {address.localidade} - {address.uf}
            </p>
            <p className="text-xs text-muted-foreground mt-1">CEP: {address.cep}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

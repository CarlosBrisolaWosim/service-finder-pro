import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-primary/5 to-primary/0 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Encontre os melhores profissionais perto de você
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Conectamos você a profissionais qualificados para realizar seus serviços com qualidade e segurança
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <Input 
              placeholder="Que serviço você precisa?"
              className="h-12 text-lg"
            />
            <Button className="h-12 px-8 text-lg">
              <Search className="mr-2 h-5 w-5" />
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
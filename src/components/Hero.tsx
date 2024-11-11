import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5535910177164", "_blank");
  };

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
          
          <div className="flex justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="h-12 px-8 text-lg flex items-center gap-2"
            >
              <MessageSquare className="h-5 w-5" />
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
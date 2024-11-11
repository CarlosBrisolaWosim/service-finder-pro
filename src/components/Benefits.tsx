import { CheckCircle, Clock, Shield, Star } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Profissionais Verificados",
      description: "Todos os profissionais passam por uma verificação detalhada"
    },
    {
      icon: <Star className="h-12 w-12 text-primary" />,
      title: "Avaliações Reais",
      description: "Veja avaliações de outros clientes antes de contratar"
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Rápido e Fácil",
      description: "Encontre o profissional ideal em minutos"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Garantia de Satisfação",
      description: "Sua satisfação é nossa prioridade"
    }
  ];

  return (
    <div className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Por que escolher nossa plataforma?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              {benefit.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
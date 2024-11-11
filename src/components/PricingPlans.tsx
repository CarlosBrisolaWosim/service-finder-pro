import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PricingPlans = () => {
  const navigate = useNavigate();
  
  const plans = [
    {
      name: "Básico",
      price: "R$ 29,90",
      period: "/mês",
      description: "Perfeito para começar",
      features: [
        "Perfil profissional",
        "Até 10 orçamentos/mês",
        "Suporte por email",
        "Avaliações de clientes"
      ],
      highlighted: false
    },
    {
      name: "Profissional",
      price: "R$ 59,90",
      period: "/mês",
      description: "Mais popular",
      features: [
        "Tudo do plano Básico",
        "Até 50 orçamentos/mês",
        "Suporte prioritário",
        "Destaque nas buscas",
        "Relatórios mensais"
      ],
      highlighted: true
    },
    {
      name: "Premium",
      price: "R$ 99,90",
      period: "/mês",
      description: "Para profissionais exigentes",
      features: [
        "Tudo do plano Profissional",
        "Orçamentos ilimitados",
        "Suporte 24/7",
        "Máximo destaque nas buscas",
        "Relatórios avançados",
        "Ferramentas de marketing"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-gray-600">
            Temos opções que se adequam a diferentes necessidades e orçamentos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                plan.highlighted
                  ? "bg-primary text-white shadow-xl scale-105"
                  : "bg-white"
              }`}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.highlighted ? "text-primary-foreground/80" : "text-gray-600"}>
                  {plan.description}
                </p>
                <div className="my-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? "text-primary-foreground/80" : "text-gray-600"}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`h-5 w-5 mr-2 ${
                      plan.highlighted ? "text-primary-foreground" : "text-primary"
                    }`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => navigate("/register")}
                className={`w-full ${
                  plan.highlighted
                    ? "bg-white text-primary hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                Começar agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
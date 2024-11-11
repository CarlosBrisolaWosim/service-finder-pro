import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  serviceType: z.string().min(3, "Tipo de serviço é obrigatório"),
  email: z.string().email("Email inválido"),
  cep: z.string().min(8, "CEP inválido").max(8, "CEP inválido"),
});

const Dashboard = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const daysRemaining = 30; // Example value

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: "Eletricista",
      email: "exemplo@email.com",
      cep: "12345678",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.success("Informações atualizadas com sucesso!");
  };

  const handleAvailabilityChange = (checked: boolean) => {
    setIsAvailable(checked);
    toast.success(checked ? "Agora você está disponível para chamados" : "Você está indisponível para chamados");
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow mb-6">
          <h1 className="text-3xl font-bold mb-2">Meu Painel</h1>
          <p className="text-gray-600 mb-4">
            Dias restantes do plano: <span className="font-bold text-primary">{daysRemaining} dias</span>
          </p>
          
          <div className="flex items-center space-x-2 mb-8">
            <Switch
              checked={isAvailable}
              onCheckedChange={handleAvailabilityChange}
            />
            <span className={isAvailable ? "text-secondary" : "text-gray-500"}>
              {isAvailable ? "Disponível para chamados" : "Indisponível para chamados"}
            </span>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Serviço</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cep"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CEP</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Salvar Alterações</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
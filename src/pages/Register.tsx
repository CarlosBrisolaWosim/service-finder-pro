import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  cpf: z.string().min(11, "CPF inválido").max(11, "CPF inválido"),
  serviceType: z.string().min(3, "Tipo de serviço é obrigatório"),
  cep: z.string().min(8, "CEP inválido").max(8, "CEP inválido"),
  rgPhoto: z.any(),
  facePhoto: z.any(),
});

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cpf: "",
      serviceType: "",
      cep: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.success("Cadastro realizado com sucesso!");
    console.log(values);
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-center mb-8">Cadastro de Profissional</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu CPF (apenas números)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Serviço</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Eletricista, Encanador, etc" {...field} />
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
                    <Input placeholder="Digite seu CEP (apenas números)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rgPhoto"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Foto do RG</FormLabel>
                  <FormControl>
                    <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files?.[0])} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="facePhoto"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Foto do Rosto</FormLabel>
                  <FormControl>
                    <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files?.[0])} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Cadastrar</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Register;
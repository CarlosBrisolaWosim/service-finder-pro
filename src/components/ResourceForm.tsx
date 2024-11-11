import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  title: z.string().min(3, "O título deve ter pelo menos 3 caracteres"),
  description: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres"),
  type: z.string().min(2, "O tipo é obrigatório"),
  status: z.boolean(),
});

export function ResourceForm({ initialData = null, onSuccess }: { initialData?: any, onSuccess?: () => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      type: initialData?.type || "",
      status: initialData?.status === "active",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (initialData?.id) {
        const { error } = await supabase
          .from("resources")
          .update({
            title: values.title,
            description: values.description,
            type: values.type,
            status: values.status ? "active" : "inactive",
          })
          .eq("id", initialData.id);

        if (error) throw error;
        toast.success("Recurso atualizado com sucesso!");
      } else {
        const { error } = await supabase
          .from("resources")
          .insert({
            title: values.title,
            description: values.description,
            type: values.type,
            status: values.status ? "active" : "inactive",
          });

        if (error) throw error;
        toast.success("Recurso criado com sucesso!");
      }

      if (onSuccess) onSuccess();
      form.reset();
    } catch (error: any) {
      toast.error("Erro ao salvar recurso: " + error.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder="Digite o título do recurso" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea placeholder="Digite a descrição do recurso" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo</FormLabel>
              <FormControl>
                <Input placeholder="Digite o tipo do recurso" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Disponibilidade</FormLabel>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">
          {initialData ? "Atualizar" : "Criar"} Recurso
        </Button>
      </form>
    </Form>
  );
}
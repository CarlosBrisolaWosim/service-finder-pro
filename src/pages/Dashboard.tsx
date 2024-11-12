import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ResourceForm } from "@/components/ResourceForm";
import { ResponsiveTable } from "@/components/ResponsiveTable";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface Resource {
  id: number;
  title: string;
  description: string | null;
  type: string | null;
  status: string | null;
}

const Dashboard = () => {
  const [editingResource, setEditingResource] = useState<Resource | null>(null);

  const { data: resources, refetch } = useQuery({
    queryKey: ['resources'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Resource[];
    },
  });

  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase
        .from('resources')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success("Recurso excluído com sucesso!");
      refetch();
    } catch (error: any) {
      toast.error("Erro ao excluir recurso: " + error.message);
    }
  };

  const columns = [
    {
      header: "Título",
      accessorKey: "title" as const,
    },
    {
      header: "Tipo",
      accessorKey: "type" as const,
    },
    {
      header: "Status",
      accessorKey: "status" as const,
      cell: (resource: Resource) => (
        <span className={`px-2 py-1 rounded-full text-sm ${
          resource.status === 'active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {resource.status === 'active' ? 'Disponível' : 'Indisponível'}
        </span>
      ),
    },
    {
      header: "Ações",
      accessorKey: "id" as const,
      cell: (resource: Resource) => (
        <div className="flex gap-2">
          <Button 
            variant="outline"
            onClick={() => setEditingResource(resource)}
          >
            Editar
          </Button>
          <Button 
            variant="destructive"
            onClick={() => handleDelete(resource.id)}
          >
            Excluir
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow mb-6">
          <h1 className="text-3xl font-bold mb-6">
            {editingResource ? "Editar Recurso" : "Novo Recurso"}
          </h1>
          
          <ResourceForm 
            initialData={editingResource} 
            onSuccess={() => {
              refetch();
              setEditingResource(null);
            }}
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Recursos Cadastrados</h2>
          <ResponsiveTable 
            data={resources || []} 
            columns={columns}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
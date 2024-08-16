// app/clientes/update/[id]/form-update-cliente.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateCliente } from "@/actions/client-actions";
import { clienteUpdateSchema, ClienteUpdate } from "@/validations/clientSchema";
import { toast } from 'sonner';
import { User, Mail, Home, Phone } from "lucide-react";
import { useRouter } from 'next/navigation';

interface FormUpdateClienteProps {
  cliente: ClienteUpdate;
}

function FormUpdateCliente({ cliente }: FormUpdateClienteProps) {
  const router = useRouter();
  const form = useForm<ClienteUpdate>({
    resolver: zodResolver(clienteUpdateSchema),
    defaultValues: {
      id: cliente.id,
      nombres: cliente.nombres,
      email: cliente.email,
      direccion: cliente.direccion,
      fono: cliente.fono,
    }
  });

  const onSubmit = async (data: ClienteUpdate) => {
    try {
      await updateCliente(data.id, data);
      toast.success("Cliente actualizado correctamente");
      router.push('/clientes');
    } catch (error) {
      console.error("Error al actualizar el cliente:", error);
      toast.error("Error al actualizar el cliente. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="nombres"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombres</FormLabel>
              <FormControl>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Nombres del Cliente" {...field} className="pl-10" />
                </div>
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
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input type="email" placeholder="Email del Cliente" {...field} className="pl-10" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="direccion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Dirección del Cliente" {...field} className="pl-10" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fono"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Teléfono del Cliente" {...field} className="pl-10" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline" onClick={() => router.push('/clientes')}>Cancelar</Button>
          <Button type="submit">Actualizar Cliente</Button>
        </div>
      </form>
    </Form>
  );
}

export default FormUpdateCliente;
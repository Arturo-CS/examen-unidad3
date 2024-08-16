// app/clientes/update/[id]/page.tsx
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import FormUpdateCliente from "./form-update-cliente";
import type { ClienteUpdate } from "@/validations/clientSchema";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function UpdateClientePage({params}: {
  params: {
    id: string
  }
}) {
  const id = parseInt(params.id);
  const cliente = await prisma.cliente.findUnique({
    where: {
      id: id
    }
  });

  if (!cliente) {
    redirect("/clientes");
  }

  const clienteData: ClienteUpdate = {
    id: cliente.id,
    nombres: cliente.nombres,
    email: cliente.email,
    direccion: cliente.direccion,
    fono: cliente.fono
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/clientes" className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a la lista de clientes
        </Link>
      </div>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Actualizar Cliente</h1>
          <FormUpdateCliente cliente={clienteData} />
        </div>
      </div>
    </div>
  );
}
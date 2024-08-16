// app/clientes/create/page.tsx
import FormCliente from "./form-cliente";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateCliente() {
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Crear Nuevo Cliente</h1>
          <FormCliente />
        </div>
      </div>
    </div>
  );
}
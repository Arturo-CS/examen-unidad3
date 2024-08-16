// app/clientes/page.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getClientes } from "@/actions/client-actions";
import ClienteTable from "@/components/table-cliente";
import { PlusCircle } from "lucide-react";

export default async function Clientes() {
  const clientes = await getClientes();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">Clientes</h1>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Una lista de todos los clientes incluyendo su nombre, email, dirección y teléfono.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link href="/clientes/create">
            <Button className="flex items-center">
              <PlusCircle className="mr-2 h-4 w-4" />
              Registrar cliente
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <ClienteTable clientes={clientes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
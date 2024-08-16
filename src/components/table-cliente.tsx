// components/table-cliente.tsx
"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Edit, Trash2 } from "lucide-react";
import { ButtonDelete } from "./button-delete";
import { removeCliente } from "@/actions/client-actions";

interface Cliente {
  id: number;
  nombres: string;
  email: string;
  direccion: string;
  fono: string;
}

interface ClienteTableProps {
  clientes: Cliente[];
}

export default function ClienteTable({ clientes }: ClienteTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nombres</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Dirección</TableHead>
          <TableHead>Teléfono</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clientes.map((cliente) => (
          <TableRow key={cliente.id}>
            <TableCell className="font-medium">{cliente.id}</TableCell>
            <TableCell>{cliente.nombres}</TableCell>
            <TableCell>{cliente.email}</TableCell>
            <TableCell>{cliente.direccion}</TableCell>
            <TableCell>{cliente.fono}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end space-x-2">
                <Link href={`/clientes/update/${cliente.id}`}>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </Link>
                <ButtonDelete nPerCode={cliente.id} functionRemove={removeCliente} label="id" />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
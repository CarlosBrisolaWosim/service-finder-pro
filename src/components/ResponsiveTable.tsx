import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface Column<T> {
  header: string;
  accessorKey: keyof T;
  cell?: (item: T) => React.ReactNode;
}

interface ResponsiveTableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
}

export function ResponsiveTable<T>({
  data,
  columns,
  className,
}: ResponsiveTableProps<T>) {
  return (
    <div className="w-full overflow-auto">
      <Table className={cn("min-w-[600px]", className)}>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={String(column.accessorKey)}>
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={String(column.accessorKey)}>
                  {column.cell
                    ? column.cell(item)
                    : String(item[column.accessorKey] || "")}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {data.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center text-muted-foreground"
              >
                Nenhum dado encontrado
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
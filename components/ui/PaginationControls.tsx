// components/ui/PaginationControls.tsx
"use client";

import Link from "next/link";

interface Props {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  basePath,
}: Props) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      {prevPage && (
        <Link
          href={`${basePath}?page=${prevPage}`}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          ← Anterior
        </Link>
      )}

      <span className="text-gray-600">
        Página {currentPage} de {totalPages}
      </span>

      {nextPage && (
        <Link
          href={`${basePath}?page=${nextPage}`}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Siguiente →
        </Link>
      )}
    </div>
  );
}

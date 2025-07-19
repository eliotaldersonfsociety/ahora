'use client';

import { DashboardLayout } from "@/components/dashboard-layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-10">
        <h2 className="text-2xl font-semibold">Tus Compras</h2>
        <p className="mt-4 text-muted-foreground text-base">
          🚧 Próximamente podrás ver tus compras aquí.
        </p>
      </div>
    </DashboardLayout>
  );
}

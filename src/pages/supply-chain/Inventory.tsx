import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InventoryOverview } from "@/components/inventory/InventoryOverview";
import { InventoryList } from "@/components/inventory/InventoryList";
import { InventoryLocations } from "@/components/inventory/InventoryLocations";
import { ProductCategories } from "@/components/inventory/ProductCategories";
import { StockMovements } from "@/components/inventory/StockMovements";
import { StockValuation } from "@/components/inventory/StockValuation";
import { AuditTrail } from "@/components/inventory/AuditTrail";
import { Button } from "@/components/ui/button";
import { Plus, BarChart2, QrCode } from "lucide-react";
import { Suspense, lazy } from 'react';

// Replace dynamic import with React.lazy
const IntegrationMonitor = lazy(() => 
  import('@/components/inventory/integration/IntegrationMonitor')
);

export default function Inventory() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Inventory Management</h2>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <QrCode className="mr-2 h-4 w-4" />
            Scan Code
          </Button>
          <Button variant="outline" size="sm">
            <BarChart2 className="mr-2 h-4 w-4" />
            Reports
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Item
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="items">Items</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="movements">Stock Movements</TabsTrigger>
          <TabsTrigger value="valuation">Valuation</TabsTrigger>
          <TabsTrigger value="audit">Audit Trail</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <InventoryOverview />
        </TabsContent>
        <TabsContent value="items">
          <InventoryList />
        </TabsContent>
        <TabsContent value="categories" className="space-y-4">
          <ProductCategories />
        </TabsContent>
        <TabsContent value="locations">
          <InventoryLocations />
        </TabsContent>
        <TabsContent value="movements" className="space-y-4">
          <StockMovements />
        </TabsContent>
        <TabsContent value="valuation" className="space-y-4">
          <StockValuation />
        </TabsContent>
        <TabsContent value="audit" className="space-y-4">
          <AuditTrail />
        </TabsContent>
        <TabsContent value="integrations" className="space-y-4">
          <Suspense fallback={
            <div className="flex items-center justify-center h-[200px]">
              <div className="text-center animate-pulse">
                <div className="h-8 w-8 mx-auto mb-4 rounded-full border-2 border-t-transparent border-blue-500 animate-spin" />
                <p>Loading integration features...</p>
              </div>
            </div>
          }>
            <ErrorBoundary>
              <IntegrationMonitor />
            </ErrorBoundary>
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="p-4 text-red-500">
          If you see this, something went wrong loading the integration module.
        </div>
      </div>
    </div>
  );
}
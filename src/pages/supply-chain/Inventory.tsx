import { Suspense, lazy } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import InventoryList from '@/components/inventory/InventoryList'

// Lazy load components
const InventoryAnalytics = lazy(() => import("@/components/inventory/InventoryAnalytics").then(module => ({ default: module.default })));
const IntegrationMonitor = lazy(() => import("@/components/inventory/integration/IntegrationMonitor").then(module => ({ default: module.default })));

// Loading fallback component
const LoadingFallback = () => (
  <Card className="p-4">
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-muted rounded w-1/4"></div>
      <div className="h-4 bg-muted rounded w-1/2"></div>
    </div>
  </Card>
);

export default function Inventory() {
  return (
    <div className="space-y-6">
      <ErrorBoundary fallback={<div>Something went wrong. Please try again.</div>}>
        <Tabs defaultValue="list" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="list">Inventory List</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
          </TabsList>

          <Suspense fallback={<LoadingFallback />}>
            <TabsContent value="list" className="space-y-4">
              <InventoryList />
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <InventoryAnalytics />
            </TabsContent>

            <TabsContent value="integration" className="space-y-4">
              <IntegrationMonitor />
            </TabsContent>
          </Suspense>
        </Tabs>
      </ErrorBoundary>
    </div>
  );
}
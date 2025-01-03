import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InventoryOverview } from "@/components/inventory/InventoryOverview";
import { InventoryList } from "@/components/inventory/InventoryList";
import { InventoryLocations } from "@/components/inventory/InventoryLocations";
import { Button } from "@/components/ui/button";
import { Plus, BarChart2, QrCode } from "lucide-react";

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
          <TabsTrigger value="locations">Locations</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <InventoryOverview />
        </TabsContent>
        <TabsContent value="items">
          <InventoryList />
        </TabsContent>
        <TabsContent value="locations">
          <InventoryLocations />
        </TabsContent>
      </Tabs>
    </div>
  );
}
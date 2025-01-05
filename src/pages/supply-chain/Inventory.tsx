import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InventoryOverview } from "@/components/inventory/InventoryOverview";
import { InventoryList } from "@/components/inventory/InventoryList";
import { InventoryLocations } from "@/components/inventory/InventoryLocations";
import { ProductCategories } from "@/components/inventory/ProductCategories";
import { StockMovements } from "@/components/inventory/StockMovements";
import { StockValuation } from "@/components/inventory/StockValuation";
import { AuditTrail } from "@/components/inventory/AuditTrail";
import IntegrationMonitor from "@/components/inventory/integration/IntegrationMonitor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  BarChart2, 
  QrCode, 
  Search,
  Filter,
  Download,
  Upload
} from "lucide-react";
import { useState } from "react";

export default function Inventory() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Inventory Management</h2>
            <p className="text-muted-foreground mt-1">
              Manage and track your inventory across all locations
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <QrCode className="mr-2 h-4 w-4" />
              Scan Code
            </Button>
            <Button variant="outline" size="sm">
              <BarChart2 className="mr-2 h-4 w-4" />
              Reports
            </Button>
            <Button variant="outline" size="sm">
              <Upload className="mr-2 h-4 w-4" />
              Import
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Item
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search inventory items..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="flex gap-2">
          <Badge variant="outline">Total Items: 2,345</Badge>
          <Badge variant="outline">Low Stock: 12</Badge>
          <Badge variant="outline">Out of Stock: 5</Badge>
          <Badge variant="outline">Categories: 8</Badge>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-muted/50 p-1">
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
        <TabsContent value="items" className="space-y-4">
          <InventoryList searchQuery={searchQuery} />
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
          <IntegrationMonitor />
        </TabsContent>
      </Tabs>
    </div>
  );
}
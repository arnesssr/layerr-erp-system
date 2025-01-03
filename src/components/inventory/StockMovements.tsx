import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowDownToLine, ArrowUpToLine, FileCheck, Calendar } from "lucide-react";

const stockMovements = {
  inward: [
    {
      id: "GRN001",
      type: "Purchase Order",
      reference: "PO-2024-001",
      supplier: "Office Solutions",
      items: [
        { name: "Office Chair", quantity: 25, sku: "FURN-001" },
        { name: "Desk Lamp", quantity: 30, sku: "LIGHT-023" }
      ],
      status: "Received",
      date: "2024-01-15"
    }
  ],
  outward: [
    {
      id: "DC001",
      type: "Sales Order",
      reference: "SO-2024-001",
      customer: "Tech Corp",
      items: [
        { name: "Office Chair", quantity: 5, sku: "FURN-001" }
      ],
      status: "Shipped",
      date: "2024-01-16"
    }
  ]
};

export function StockMovements() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Stock Movements</CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline" className="flex items-center">
              <ArrowDownToLine className="mr-1 h-4 w-4 text-green-500" />
              Inward: {stockMovements.inward.length}
            </Badge>
            <Badge variant="outline" className="flex items-center">
              <ArrowUpToLine className="mr-1 h-4 w-4 text-blue-500" />
              Outward: {stockMovements.outward.length}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="inward" className="space-y-4">
          <TabsList>
            <TabsTrigger value="inward">Inward Stock</TabsTrigger>
            <TabsTrigger value="outward">Outward Stock</TabsTrigger>
          </TabsList>
          
          <TabsContent value="inward">
            <ScrollArea className="h-[400px]">
              {stockMovements.inward.map((movement) => (
                <StockMovementCard key={movement.id} movement={movement} type="inward" />
              ))}
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="outward">
            <ScrollArea className="h-[400px]">
              {stockMovements.outward.map((movement) => (
                <StockMovementCard key={movement.id} movement={movement} type="outward" />
              ))}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function StockMovementCard({ movement, type }: { movement: any, type: 'inward' | 'outward' }) {
  return (
    <div className="mb-4 rounded-lg border p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {type === 'inward' ? (
            <ArrowDownToLine className="h-4 w-4 text-green-500" />
          ) : (
            <ArrowUpToLine className="h-4 w-4 text-blue-500" />
          )}
          <h4 className="font-medium">{movement.type}</h4>
          <p className="text-sm text-muted-foreground">Ref: {movement.reference}</p>
        </div>
        <Badge variant={movement.status === "Received" ? "secondary" : "default"}>
          {movement.status}
        </Badge>
      </div>
      
      <div className="space-y-2">
        {movement.items.map((item: any, index: number) => (
          <div key={index} className="flex items-center justify-between text-sm border-b pb-2">
            <div>
              <span className="font-medium">{item.name}</span>
              <span className="text-muted-foreground ml-2">({item.sku})</span>
            </div>
            <Badge variant="outline">{item.quantity} units</Badge>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <FileCheck className="h-4 w-4 mr-1" />
          {type === 'inward' ? movement.supplier : movement.customer}
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {movement.date}
        </div>
      </div>
    </div>
  );
}

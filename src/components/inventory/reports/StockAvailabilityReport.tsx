import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const stockData = [
  {
    id: 1,
    sku: "FURN-001",
    name: "Office Chair",
    inStock: 105,
    minStock: 20,
    maxStock: 150,
    reorderPoint: 30,
    status: "Optimal",
    location: "Main Warehouse"
  },
  {
    id: 2,
    sku: "LIGHT-023",
    name: "Desk Lamp",
    inStock: 15,
    minStock: 20,
    maxStock: 100,
    reorderPoint: 25,
    status: "Low Stock",
    location: "East Wing"
  }
];

export function StockAvailabilityReport() {
  return (
    <Card>
      <CardContent className="pt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SKU</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Stock Level</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Stock Range</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stockData.map((item) => {
              const stockPercentage = (item.inStock / item.maxStock) * 100;
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.inStock} units</TableCell>
                  <TableCell>
                    <Badge variant={getStockStatusVariant(item.status)}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell className="w-[200px]">
                    <div className="space-y-2">
                      <Progress 
                        value={stockPercentage} 
                        className={`h-2 ${getProgressVariant(stockPercentage)}`}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Min: {item.minStock}</span>
                        <span>Max: {item.maxStock}</span>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function getStockStatusVariant(status: string) {
  switch (status.toLowerCase()) {
    case 'optimal':
      return 'default';
    case 'low stock':
      return 'destructive';
    case 'overstocked':
      return 'secondary';
    default:
      return 'outline';
  }
}

function getProgressVariant(percentage: number): string {
  if (percentage > 80) return "bg-yellow-500";
  if (percentage < 20) return "bg-red-500";
  return "bg-green-500";
}

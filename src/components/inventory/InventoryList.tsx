import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { Package2, AlertTriangle } from "lucide-react";

const inventoryData = [
  {
    id: "INV001",
    name: "Office Chair",
    sku: "FURN-001",
    quantity: 50,
    status: "In Stock",
    reorderPoint: 10,
    category: "Furniture",
    lastUpdated: "2024-01-02"
  },
  // Add more items...
];

export function InventoryList() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Inventory Items</CardTitle>
          <Badge variant="secondary" className="flex items-center">
            <Package2 className="mr-1 h-4 w-4" />
            {inventoryData.length} Items
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SKU</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Last Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.sku}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell className="flex items-center">
                  {item.quantity}
                  {item.quantity <= item.reorderPoint && (
                    <AlertTriangle className="ml-2 h-4 w-4 text-yellow-500" />
                  )}
                </TableCell>
                <TableCell>
                  <Badge>{item.status}</Badge>
                </TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.lastUpdated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

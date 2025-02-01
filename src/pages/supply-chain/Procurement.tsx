import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockPurchaseOrders = [
  {
    id: "PO-2024-001",
    supplier: "Tech Solutions Inc.",
    status: "Pending",
    amount: "$12,500",
    date: "2024-03-15",
  },
  {
    id: "PO-2024-002",
    supplier: "Office Supplies Co.",
    status: "Approved",
    amount: "$3,750",
    date: "2024-03-14",
  },
  {
    id: "PO-2024-003",
    supplier: "Industrial Parts Ltd.",
    status: "Delivered",
    amount: "$8,900",
    date: "2024-03-13",
  },
];

export default function Procurement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Procurement</h1>
          <p className="text-muted-foreground">
            Manage purchase orders and supplier relationships
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Purchase Order
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search purchase orders..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>PO Number</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPurchaseOrders.map((po) => (
              <TableRow key={po.id}>
                <TableCell className="font-medium">{po.id}</TableCell>
                <TableCell>{po.supplier}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      po.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : po.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {po.status}
                  </span>
                </TableCell>
                <TableCell>{po.amount}</TableCell>
                <TableCell>{po.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
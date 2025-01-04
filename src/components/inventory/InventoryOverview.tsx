import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Package2, AlertTriangle, TrendingUp, MapPin } from "lucide-react";

const metrics = [
  {
    title: "Total Items",
    value: "2,345",
    description: "+4.3% from last month",
    icon: Package2,
    color: "bg-blue-500"
  },
  {
    title: "Low Stock Alerts",
    value: "12",
    description: "Items need attention",
    icon: AlertTriangle,
    color: "bg-yellow-500"
  },
  {
    title: "Active Locations",
    value: "5",
    description: "Across 3 warehouses",
    icon: MapPin,
    color: "bg-green-500"
  },
  {
    title: "Stock Value",
    value: "$234,567",
    description: "+2.1% this week",
    icon: TrendingUp,
    color: "bg-purple-500"
  }
];

export function InventoryOverview() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color} text-white rounded-full p-1`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Stock Level by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Low Stock Alerts</CardTitle>
            <Badge variant="destructive">{lowStockItems.length} Items</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">SKU: {item.sku}</p>
                  </div>
                  <Badge variant="outline" className="font-mono">
                    {item.quantity} left
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const categoryData = [
  { name: 'Electronics', value: 400 },
  { name: 'Furniture', value: 300 },
  { name: 'Office', value: 200 },
  { name: 'Storage', value: 150 },
];

const lowStockItems = [
  { id: 1, name: "Office Chair", sku: "FURN-001", quantity: 3 },
  { id: 2, name: "Desk Lamp", sku: "LIGHT-023", quantity: 5 },
  { id: 3, name: "Printer Paper", sku: "SUP-089", quantity: 10 },
];

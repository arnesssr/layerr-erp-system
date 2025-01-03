import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, TrendingUp, Calculator } from "lucide-react";

const valuationMethods = {
  FIFO: calculateFIFO,
  LIFO: calculateLIFO,
  "Weighted Average": calculateWeightedAverage
};

const stockData = [
  {
    id: 1,
    sku: "FURN-001",
    name: "Office Chair",
    batches: [
      { date: "2024-01-01", quantity: 50, cost: 75.00 },
      { date: "2024-01-15", quantity: 30, cost: 80.00 },
      { date: "2024-02-01", quantity: 20, cost: 85.00 }
    ]
  },
  {
    id: 2,
    sku: "LIGHT-023",
    name: "Desk Lamp",
    batches: [
      { date: "2024-01-05", quantity: 100, cost: 25.00 },
      { date: "2024-01-20", quantity: 50, cost: 27.50 }
    ]
  }
];

export function StockValuation() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Valuation</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
              +12.5% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Stock Valuation Analysis
            </CardTitle>
            <Select defaultValue="FIFO">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select method" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(valuationMethods).map((method) => (
                  <SelectItem key={method} value={method}>
                    {method}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Total Quantity</TableHead>
                <TableHead>Average Cost</TableHead>
                <TableHead>Total Value</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stockData.map((item) => {
                const valuation = calculateWeightedAverage(item.batches);
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.sku}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{valuation.totalQuantity}</TableCell>
                    <TableCell>${valuation.averageCost.toFixed(2)}</TableCell>
                    <TableCell>${valuation.totalValue.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {item.batches[item.batches.length - 1].date}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Batch Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="FIFO">
            <TabsList>
              {Object.keys(valuationMethods).map((method) => (
                <TabsTrigger key={method} value={method}>
                  {method}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.keys(valuationMethods).map((method) => (
              <TabsContent key={method} value={method}>
                <div className="space-y-4">
                  {stockData.map((item) => (
                    <div key={item.id} className="space-y-2">
                      <h4 className="font-medium">{item.name}</h4>
                      <div className="rounded-lg border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Date</TableHead>
                              <TableHead>Quantity</TableHead>
                              <TableHead>Cost per Unit</TableHead>
                              <TableHead>Total</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {item.batches.map((batch, index) => (
                              <TableRow key={index}>
                                <TableCell>{batch.date}</TableCell>
                                <TableCell>{batch.quantity}</TableCell>
                                <TableCell>${batch.cost.toFixed(2)}</TableCell>
                                <TableCell>
                                  ${(batch.quantity * batch.cost).toFixed(2)}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

function calculateFIFO(batches: any[]) {
  const totalQuantity = batches.reduce((sum, batch) => sum + batch.quantity, 0);
  const totalValue = batches.reduce((sum, batch) => sum + (batch.quantity * batch.cost), 0);
  return {
    totalQuantity,
    totalValue,
    averageCost: totalValue / totalQuantity
  };
}

function calculateLIFO(batches: any[]) {
  const reversedBatches = [...batches].reverse();
  return calculateFIFO(reversedBatches);
}

function calculateWeightedAverage(batches: any[]) {
  const totalQuantity = batches.reduce((sum, batch) => sum + batch.quantity, 0);
  const totalValue = batches.reduce((sum, batch) => sum + (batch.quantity * batch.cost), 0);
  return {
    totalQuantity,
    totalValue,
    averageCost: totalValue / totalQuantity
  };
}

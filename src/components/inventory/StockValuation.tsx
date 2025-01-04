import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, TrendingUp, Calculator } from "lucide-react";
import { ValuationDetails } from "./ValuationDetails";
import { calculateFIFO, calculateLIFO, calculateWeightedAverage } from "@/utils/valuationMethods";

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
  const [selectedMethod, setSelectedMethod] = useState("FIFO");
  
  // Get valuation based on selected method
  const getValuation = () => {
    switch (selectedMethod) {
      case "FIFO":
        return calculateFIFO(stockData[0].batches);
      case "LIFO":
        return calculateLIFO(stockData[0].batches);
      case "Weighted Average":
        return calculateWeightedAverage(stockData[0].batches);
      default:
        return calculateFIFO(stockData[0].batches);
    }
  };

  const valuation = getValuation();

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

      <div className="flex justify-end mb-4">
        <Select 
          value={selectedMethod} 
          onValueChange={setSelectedMethod}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="FIFO">FIFO</SelectItem>
            <SelectItem value="LIFO">LIFO</SelectItem>
            <SelectItem value="Weighted Average">Weighted Average</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ValuationDetails 
        data={valuation} 
        method={selectedMethod} 
      />

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

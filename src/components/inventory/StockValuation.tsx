import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, TrendingUp } from "lucide-react";
import { ValuationDetails } from "./ValuationDetails";
import { calculateFIFO, calculateLIFO, calculateWeightedAverage } from "@/utils/valuationMethods";
import { InventoryMetrics } from "./InventoryMetrics";

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
  }
];

export function StockValuation() {
  const [selectedMethod, setSelectedMethod] = useState("FIFO");
  
  const getValuation = () => {
    const batches = stockData[0].batches;
    switch (selectedMethod) {
      case "FIFO":
        return calculateFIFO(batches);
      case "LIFO":
        return calculateLIFO(batches);
      case "Weighted Average":
        return calculateWeightedAverage(batches);
      default:
        return calculateFIFO(batches);
    }
  };

  const valuation = getValuation();

  return (
    <div className="space-y-6">
      <InventoryMetrics />
      
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
              <TabsTrigger value="FIFO">FIFO</TabsTrigger>
              <TabsTrigger value="LIFO">LIFO</TabsTrigger>
              <TabsTrigger value="Weighted Average">Weighted Average</TabsTrigger>
            </TabsList>
            {["FIFO", "LIFO", "Weighted Average"].map((method) => (
              <TabsContent key={method} value={method}>
                <div className="space-y-4">
                  {stockData.map((item) => (
                    <ValuationDetails
                      key={item.id}
                      data={getValuation()}
                      method={method}
                    />
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
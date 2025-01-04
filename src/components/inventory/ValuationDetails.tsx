import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ValuationResult } from "@/utils/valuationMethods";

interface ValuationDetailsProps {
  data: ValuationResult;
  method: string;
}

export function ValuationDetails({ data, method }: ValuationDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {method} Valuation Details
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{getMethodDescription(method)}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline">
              Average Cost: ${data.averageCost.toFixed(2)}
            </Badge>
            <Badge variant="outline">
              Total Value: ${data.totalValue.toFixed(2)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Unit Cost</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Running Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.details.map((detail, index) => {
              const runningTotal = data.details
                .slice(0, index + 1)
                .reduce((sum, d) => sum + d.total, 0);

              return (
                <TableRow key={index}>
                  <TableCell>{detail.date}</TableCell>
                  <TableCell>{detail.quantity}</TableCell>
                  <TableCell>${detail.unitCost.toFixed(2)}</TableCell>
                  <TableCell>${detail.total.toFixed(2)}</TableCell>
                  <TableCell>${runningTotal.toFixed(2)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function getMethodDescription(method: string): string {
  switch (method) {
    case 'FIFO':
      return 'First In, First Out - Assumes oldest inventory items are sold first';
    case 'LIFO':
      return 'Last In, First Out - Assumes newest inventory items are sold first';
    case 'Weighted Average':
      return 'Calculates average cost across all inventory items';
    default:
      return '';
  }
}

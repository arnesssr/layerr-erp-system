import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Package2, AlertTriangle, TrendingUp, DollarSign } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: number;
}

const MetricCard = ({ title, value, description, icon, trend }: MetricCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <div className="flex items-center text-xs text-muted-foreground">
        {trend && (
          <TrendingUp className={`mr-1 h-4 w-4 ${trend > 0 ? 'text-green-500' : 'text-red-500'}`} />
        )}
        <span>{description}</span>
      </div>
    </CardContent>
  </Card>
);

export function InventoryMetrics() {
  const metrics = [
    {
      title: "Total Stock Value",
      value: "$234,567",
      description: "+12.5% from last month",
      icon: <DollarSign className="h-4 w-4 text-blue-500" />,
      trend: 12.5
    },
    {
      title: "Low Stock Items",
      value: "12",
      description: "Items need attention",
      icon: <AlertTriangle className="h-4 w-4 text-yellow-500" />,
      trend: -2
    },
    {
      title: "Stock Turnover",
      value: "4.2x",
      description: "Annual turnover rate",
      icon: <TrendingUp className="h-4 w-4 text-green-500" />,
      trend: 0.3
    },
    {
      title: "Total Items",
      value: "2,345",
      description: "Across all locations",
      icon: <Package2 className="h-4 w-4 text-purple-500" />,
      trend: 4.3
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}
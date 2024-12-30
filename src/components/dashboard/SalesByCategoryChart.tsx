import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card } from "@/components/ui/card";
import { ChartConfigPanel, ChartType } from "./ChartConfigPanel";
import { useState } from "react";

const salesData = [
  { category: "Electronics", sales: 400 },
  { category: "Clothing", sales: 300 },
  { category: "Food", sales: 200 },
  { category: "Books", sales: 150 },
];

const COLORS = [
  "#0EA5E9", // Ocean Blue
  "#F97316", // Bright Orange
  "#D946EF", // Magenta Pink
  "#8B5CF6", // Vivid Purple
];

export function SalesByCategoryChart() {
  const [chartType, setChartType] = useState<ChartType>("bar");

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
            <XAxis dataKey="category" stroke="currentColor" opacity={0.5} />
            <YAxis stroke="currentColor" opacity={0.5} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem",
              }}
            />
            <Bar dataKey="sales">
              {salesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        );
      case "line":
        return (
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
            <XAxis dataKey="category" stroke="currentColor" opacity={0.5} />
            <YAxis stroke="currentColor" opacity={0.5} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem",
              }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#0EA5E9"
              strokeWidth={2}
            />
          </LineChart>
        );
      case "pie":
        return (
          <PieChart>
            <Pie
              data={salesData}
              dataKey="sales"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {salesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem",
              }}
            />
          </PieChart>
        );
    }
  };

  return (
    <Card className="p-8 bg-background/50 border-border backdrop-blur-sm">
      <h2 className="text-xl font-bold text-foreground mb-4">Sales by Category</h2>
      <ChartConfigPanel chartType={chartType} onChartTypeChange={setChartType} />
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
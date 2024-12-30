import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card } from "@/components/ui/card";
import { ChartConfigPanel, ChartType } from "./ChartConfigPanel";
import { useState } from "react";

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 5500 },
];

const COLORS = [
  "#9b87f5", // Primary Purple
  "#7E69AB", // Secondary Purple
  "#6E59A5", // Tertiary Purple
  "#1A1F2C", // Dark Purple
  "#D6BCFA", // Light Purple
  "#8B5CF6", // Vivid Purple
];

export function RevenueTrendChart() {
  const [chartType, setChartType] = useState<ChartType>("line");

  const renderChart = () => {
    switch (chartType) {
      case "line":
        return (
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
            <XAxis dataKey="month" stroke="currentColor" opacity={0.5} />
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
              dataKey="revenue"
              stroke="#9b87f5"
              strokeWidth={2}
            />
          </LineChart>
        );
      case "bar":
        return (
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
            <XAxis dataKey="month" stroke="currentColor" opacity={0.5} />
            <YAxis stroke="currentColor" opacity={0.5} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--background))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem",
              }}
            />
            <Bar dataKey="revenue" fill="#9b87f5" />
          </BarChart>
        );
      case "pie":
        return (
          <PieChart>
            <Pie
              data={revenueData}
              dataKey="revenue"
              nameKey="month"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {revenueData.map((entry, index) => (
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
      <h2 className="text-xl font-bold text-foreground mb-4">Revenue Trend</h2>
      <ChartConfigPanel chartType={chartType} onChartTypeChange={setChartType} />
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
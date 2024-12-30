import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { Card } from "@/components/ui/card";

const marketShareData = [
  { name: "Product A", value: 400 },
  { name: "Product B", value: 300 },
  { name: "Product C", value: 200 },
  { name: "Product D", value: 100 },
];

const COLORS = [
  "#1EAEDB", // Bright Blue
  "#33C3F0", // Sky Blue
  "#0FA0CE", // Bright Blue
  "#0EA5E9", // Ocean Blue
];

export function MarketShareChart() {
  return (
    <Card className="p-8 bg-background/50 border-border backdrop-blur-sm">
      <h2 className="text-xl font-bold text-foreground mb-4">Market Share</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={marketShareData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {marketShareData.map((entry, index) => (
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
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
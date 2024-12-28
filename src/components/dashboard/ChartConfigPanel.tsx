import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BarChart, LineChart, PieChart } from "lucide-react";
import { Card } from "@/components/ui/card";

export type ChartType = "line" | "bar" | "pie";

interface ChartConfigPanelProps {
  chartType: ChartType;
  onChartTypeChange: (type: ChartType) => void;
}

export function ChartConfigPanel({ chartType, onChartTypeChange }: ChartConfigPanelProps) {
  return (
    <Card className="p-4 mb-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Chart Type</span>
        <ToggleGroup type="single" value={chartType} onValueChange={(value) => value && onChartTypeChange(value as ChartType)}>
          <ToggleGroupItem value="line" aria-label="Line Chart">
            <LineChart className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="bar" aria-label="Bar Chart">
            <BarChart className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="pie" aria-label="Pie Chart">
            <PieChart className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </Card>
  );
}
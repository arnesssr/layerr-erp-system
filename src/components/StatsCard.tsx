import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
  changeType: "positive" | "negative";
}

export function StatsCard({ title, value, icon: Icon, change, changeType }: StatsCardProps) {
  return (
    <Card className="p-8 bg-background/50 border-border backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <Icon className="h-8 w-8 text-primary" />
        <span
          className={`text-sm font-medium ${
            changeType === "positive" ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-foreground">{value}</h2>
        <p className="text-muted-foreground text-sm">{title}</p>
      </div>
    </Card>
  );
}
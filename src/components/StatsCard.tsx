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
    <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <Icon className="h-8 w-8 text-blue-500" />
        <span
          className={`text-sm font-medium ${
            changeType === "positive" ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-white">{value}</h2>
        <p className="text-gray-400 text-sm">{title}</p>
      </div>
    </Card>
  );
}
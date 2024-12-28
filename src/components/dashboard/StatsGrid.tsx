import { StatsCard } from "@/components/StatsCard";
import { DollarSign, Users, ShoppingCart, Package, TrendingUp, AlertTriangle, Clock, Boxes } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$54,234",
    icon: DollarSign,
    change: "+12%",
    changeType: "positive" as const,
  },
  {
    title: "Active Employees",
    value: "234",
    icon: Users,
    change: "+3.2%",
    changeType: "positive" as const,
  },
  {
    title: "Sales Orders",
    value: "456",
    icon: ShoppingCart,
    change: "+8.1%",
    changeType: "positive" as const,
  },
  {
    title: "Inventory Items",
    value: "1,234",
    icon: Package,
    change: "-2.1%",
    changeType: "negative" as const,
  },
  {
    title: "Growth Rate",
    value: "15.8%",
    icon: TrendingUp,
    change: "+5.3%",
    changeType: "positive" as const,
  },
  {
    title: "Pending Tasks",
    value: "28",
    icon: Clock,
    change: "-12%",
    changeType: "positive" as const,
  },
  {
    title: "Low Stock Items",
    value: "45",
    icon: AlertTriangle,
    change: "+8",
    changeType: "negative" as const,
  },
  {
    title: "Total Products",
    value: "2,845",
    icon: Boxes,
    change: "+124",
    changeType: "positive" as const,
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -ml-2">
      {stats.map((stat) => (
        <StatsCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
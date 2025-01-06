import { StatsCard } from "@/components/StatsCard";
import { 
  DollarSign, Users, ShoppingCart, Package, 
  TrendingUp, AlertTriangle, Clock, Boxes,
  UserCheck, Building2, FileText, Activity
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$54,234",
    icon: DollarSign,
    change: "+12%",
    changeType: "positive" as const,
    category: "finance"
  },
  {
    title: "Active Employees",
    value: "234",
    icon: Users,
    change: "+3.2%",
    changeType: "positive" as const,
    category: "hr"
  },
  {
    title: "Sales Orders",
    value: "456",
    icon: ShoppingCart,
    change: "+8.1%",
    changeType: "positive" as const,
    category: "sales"
  },
  {
    title: "Inventory Items",
    value: "1,234",
    icon: Package,
    change: "-2.1%",
    changeType: "negative" as const,
    category: "inventory"
  },
  {
    title: "Growth Rate",
    value: "15.8%",
    icon: TrendingUp,
    change: "+5.3%",
    changeType: "positive" as const,
    category: "finance"
  },
  {
    title: "Pending Tasks",
    value: "28",
    icon: Clock,
    change: "-12%",
    changeType: "positive" as const,
    category: "operations"
  },
  {
    title: "Low Stock Items",
    value: "45",
    icon: AlertTriangle,
    change: "+8",
    changeType: "negative" as const,
    category: "inventory"
  },
  {
    title: "Active Projects",
    value: "12",
    icon: FileText,
    change: "+2",
    changeType: "positive" as const,
    category: "projects"
  },
  {
    title: "Customer Satisfaction",
    value: "92%",
    icon: UserCheck,
    change: "+4%",
    changeType: "positive" as const,
    category: "customer"
  },
  {
    title: "Department Efficiency",
    value: "87%",
    icon: Building2,
    change: "+5%",
    changeType: "positive" as const,
    category: "operations"
  },
  {
    title: "System Health",
    value: "99.9%",
    icon: Activity,
    change: "+0.1%",
    changeType: "positive" as const,
    category: "system"
  },
  {
    title: "Total Products",
    value: "2,845",
    icon: Boxes,
    change: "+124",
    changeType: "positive" as const,
    category: "inventory"
  }
];

export function StatsGrid() {
  console.log("Rendering StatsGrid with", stats.length, "metrics");
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.title} className="animate-fade-in">
          <StatsCard {...stat} />
        </div>
      ))}
    </div>
  );
}
import { RevenueTrendChart } from "@/components/dashboard/RevenueTrendChart";
import { SalesByCategoryChart } from "@/components/dashboard/SalesByCategoryChart";
import { MarketShareChart } from "@/components/dashboard/MarketShareChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { StatsGrid } from "@/components/dashboard/StatsGrid";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome to your ERP dashboard</p>
      </div>

      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 -ml-2">
        <RevenueTrendChart />
        <SalesByCategoryChart />
        <MarketShareChart />
        <RecentActivity />
      </div>
    </div>
  );
}
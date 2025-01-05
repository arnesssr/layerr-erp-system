import { DashboardMetrics } from "../components/dashboard/DashboardMetrics";
import { RecentActivities } from "../components/dashboard/RecentActivities";
import { RevenueTrendChart } from "../components/dashboard/RevenueTrendChart";
import { SalesByCategoryChart } from "../components/dashboard/SalesByCategoryChart";
import { MarketShareChart } from "../components/dashboard/MarketShareChart";
import { StatsGrid } from "../components/dashboard/StatsGrid";

export default function Dashboard() {
  console.log("Rendering Dashboard component");
  
  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleString()}
          </span>
        </div>
      </div>

      <StatsGrid />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <RevenueTrendChart />
        </div>
        <div className="col-span-3">
          <RecentActivities />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <SalesByCategoryChart />
        </div>
        <div className="col-span-3">
          <MarketShareChart />
        </div>
      </div>
    </div>
  );
}
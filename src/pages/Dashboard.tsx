import { DashboardMetrics } from "../components/dashboard/DashboardMetrics";
import { RecentActivities } from "../components/dashboard/RecentActivities";
import { RevenueTrendChart } from "../components/dashboard/RevenueTrendChart";
import { SalesByCategoryChart } from "../components/dashboard/SalesByCategoryChart";
import { MarketShareChart } from "../components/dashboard/MarketShareChart";
import { StatsGrid } from "../components/dashboard/StatsGrid";

export default function Dashboard() {
  console.log("Rendering Dashboard component");
  
  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleString()}
          </span>
        </div>
      </div>

      <div className="animate-fade-in">
        <StatsGrid />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 animate-fade-in [animation-delay:200ms]">
        <div className="col-span-4 transition-all hover:scale-[1.01]">
          <RevenueTrendChart />
        </div>
        <div className="col-span-3 transition-all hover:scale-[1.01]">
          <RecentActivities />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 animate-fade-in [animation-delay:400ms]">
        <div className="col-span-4 transition-all hover:scale-[1.01]">
          <SalesByCategoryChart />
        </div>
        <div className="col-span-3 transition-all hover:scale-[1.01]">
          <MarketShareChart />
        </div>
      </div>
    </div>
  );
}
import { RevenueTrendChart } from "@/components/dashboard/RevenueTrendChart";
import { SalesByCategoryChart } from "@/components/dashboard/SalesByCategoryChart";
import { MarketShareChart } from "@/components/dashboard/MarketShareChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { DashboardMetrics } from "../components/dashboard/DashboardMetrics";
import { RecentActivities } from "../components/dashboard/RecentActivities";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { PlusCircle, Bell } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Quick Action
          </Button>
        </div>
      </div>
      <DashboardMetrics />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <RevenueTrendChart />
        <RecentActivities />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
        {/* Add more dashboard widgets */}
      </div>
    </div>
  );
}
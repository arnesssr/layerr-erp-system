import { DashboardMetrics } from "../components/dashboard/DashboardMetrics";
import { RecentActivities } from "../components/dashboard/RecentActivities";
import { RevenueTrendChart } from "../components/dashboard/RevenueTrendChart";

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <DashboardMetrics />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <RevenueTrendChart />
        </div>
        <div className="lg:col-span-3">
          <RecentActivities />
        </div>
      </div>
    </div>
  );
}
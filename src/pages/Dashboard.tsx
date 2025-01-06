import { DashboardMetrics } from "../components/dashboard/DashboardMetrics";
import { RecentActivities } from "../components/dashboard/RecentActivities";
import { RevenueTrendChart } from "../components/dashboard/RevenueTrendChart";
import { SalesByCategoryChart } from "../components/dashboard/SalesByCategoryChart";
import { MarketShareChart } from "../components/dashboard/MarketShareChart";
import { StatsGrid } from "../components/dashboard/StatsGrid";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";
import { toast } from "sonner";

// Simulated real-time data updates
const useRealTimeData = () => {
  const [data, setData] = useState({
    revenue: 0,
    orders: 0,
    customers: 0
  });

  useEffect(() => {
    console.log("Setting up real-time data updates");
    const interval = setInterval(() => {
      setData(prev => ({
        revenue: prev.revenue + Math.random() * 1000,
        orders: prev.orders + Math.floor(Math.random() * 5),
        customers: prev.customers + Math.floor(Math.random() * 3)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return data;
};

export default function Dashboard() {
  const realTimeData = useRealTimeData();
  const [selectedDateRange, setSelectedDateRange] = useState("today");
  
  console.log("Rendering Dashboard with real-time data:", realTimeData);

  const handleExport = () => {
    toast.success("Report exported successfully");
  };

  const handleFilterChange = (range: string) => {
    setSelectedDateRange(range);
    console.log("Date range changed to:", range);
  };

  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Real-time overview of your business performance
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Tabs value={selectedDateRange} onValueChange={handleFilterChange}>
            <TabsList>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="week">This Week</TabsTrigger>
              <TabsTrigger value="month">This Month</TabsTrigger>
              <TabsTrigger value="year">This Year</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="animate-fade-in">
          <StatsGrid />
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 transition-all hover:scale-[1.01]">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Revenue Trend</CardTitle>
              <Badge variant="secondary" className="animate-pulse">
                Live
              </Badge>
            </CardHeader>
            <CardContent>
              <RevenueTrendChart />
            </CardContent>
          </Card>

          <Card className="col-span-3 transition-all hover:scale-[1.01]">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentActivities />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 transition-all hover:scale-[1.01]">
            <CardHeader>
              <CardTitle>Sales by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <SalesByCategoryChart />
            </CardContent>
          </Card>

          <Card className="col-span-3 transition-all hover:scale-[1.01]">
            <CardHeader>
              <CardTitle>Market Share</CardTitle>
            </CardHeader>
            <CardContent>
              <MarketShareChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
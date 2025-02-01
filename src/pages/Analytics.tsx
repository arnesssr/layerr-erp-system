import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";

interface AnalyticsData {
  time: string;
  users: number;
  sales: number;
}

// Simulated API Data Fetching with proper typing
const fetchData = async (): Promise<AnalyticsData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { time: "Jan", users: 500, sales: 1200 },
        { time: "Feb", users: 700, sales: 1500 },
        { time: "Mar", users: 900, sales: 1800 },
        { time: "Apr", users: 1100, sales: 2200 },
        { time: "May", users: 1300, sales: 2700 },
      ]);
    }, 1000);
  });
};

const Analytics = () => {
  const [data, setData] = useState<AnalyticsData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch analytics data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const LoadingSkeleton = () => (
    <div className="w-full h-[300px] bg-muted/10 animate-pulse rounded-lg" />
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground mt-2">Track your business performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* KPI Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Users Growth</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <>
                <p className="text-2xl font-semibold">{data[data.length - 1]?.users.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total users this month</p>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <>
                <p className="text-2xl font-semibold">
                  ${data[data.length - 1]?.sales.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Revenue this month</p>
              </>
            )}
          </CardContent>
        </Card>

        {/* Line Chart for User Growth */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>User Growth Trend</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <LoadingSkeleton />
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <XAxis dataKey="time" stroke="currentColor" />
                  <YAxis stroke="currentColor" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <CartesianGrid stroke="currentColor" opacity={0.1} />
                  <Line 
                    type="monotone" 
                    dataKey="users" 
                    stroke="#0EA5E9" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Bar Chart for Sales Performance */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Monthly Sales</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <LoadingSkeleton />
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <XAxis dataKey="time" stroke="currentColor" />
                  <YAxis stroke="currentColor" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <CartesianGrid stroke="currentColor" opacity={0.1} />
                  <Bar 
                    dataKey="sales" 
                    fill="#0EA5E9"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
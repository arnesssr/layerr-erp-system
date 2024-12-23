import { Card } from "@/components/ui/card";
import { DollarSign, Users, ShoppingCart, Package } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

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
];

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 5500 },
];

const salesData = [
  { category: "Electronics", sales: 400 },
  { category: "Clothing", sales: 300 },
  { category: "Food", sales: 200 },
  { category: "Books", sales: 150 },
];

const marketShareData = [
  { name: "Product A", value: 400 },
  { name: "Product B", value: 300 },
  { name: "Product C", value: 200 },
  { name: "Product D", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-2">Welcome to your ERP dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white mb-4">Revenue Trend</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "0.5rem",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#0EA5E9"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white mb-4">Sales by Category</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="category" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "0.5rem",
                  }}
                />
                <Bar dataKey="sales" fill="#0EA5E9" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white mb-4">Market Share</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={marketShareData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {marketShareData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "0.5rem",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-200">New order received</span>
              </div>
              <span className="text-gray-400 text-sm">2 mins ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-200">Payment processed</span>
              </div>
              <span className="text-gray-400 text-sm">15 mins ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-200">Low inventory alert</span>
              </div>
              <span className="text-gray-400 text-sm">1 hour ago</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
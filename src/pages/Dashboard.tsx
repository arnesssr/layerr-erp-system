import { Card } from "@/components/ui/card";
import { BarChart2, Users, Workflow } from "lucide-react";

const stats = [
  {
    title: "Active Workflows",
    value: "24",
    icon: Workflow,
    change: "+12%",
    changeType: "positive",
  },
  {
    title: "Total Users",
    value: "1,234",
    icon: Users,
    change: "+3.2%",
    changeType: "positive",
  },
  {
    title: "Processing Rate",
    value: "98.5%",
    icon: BarChart2,
    change: "-0.1%",
    changeType: "negative",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-2">Welcome to your LAYR dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <stat.icon className="h-8 w-8 text-blue-500" />
              <span
                className={`text-sm font-medium ${
                  stat.changeType === "positive"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-white">{stat.value}</h2>
              <p className="text-gray-400 text-sm">{stat.title}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
        <div className="text-gray-400">
          Your recent activity will appear here once you start using the platform.
        </div>
      </Card>
    </div>
  );
}
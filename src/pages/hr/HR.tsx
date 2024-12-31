import { Card } from "@/components/ui/card";
import { Users, UserPlus, Target, Building2 } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data for department distribution
const departmentData = [
  { name: 'Engineering', employees: 45 },
  { name: 'Sales', employees: 30 },
  { name: 'Marketing', employees: 20 },
  { name: 'HR', employees: 10 },
  { name: 'Finance', employees: 15 },
];

export default function HR() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold">Human Resources</h1>
        <p className="text-muted-foreground mt-2">Manage your organization's workforce effectively</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Employees"
          value="1,234"
          icon={Users}
          change="+3.2%"
          changeType="positive"
        />
        <StatsCard
          title="Open Positions"
          value="23"
          icon={UserPlus}
          change="+5"
          changeType="positive"
        />
        <StatsCard
          title="Departments"
          value="12"
          icon={Building2}
          change="0"
          changeType="positive"
        />
        <StatsCard
          title="Performance Reviews"
          value="45"
          icon={Target}
          change="+12"
          changeType="positive"
        />
      </div>

      {/* Department Distribution Chart */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Department Distribution</h3>
        <div className="w-full h-[300px]">
          <BarChart
            width={800}
            height={300}
            data={departmentData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="employees" fill="#0EA5E9" />
          </BarChart>
        </div>
      </Card>

      {/* Quick Actions and Recent Activities */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 hover:bg-accent rounded-md">Add New Employee</button>
            <button className="w-full text-left px-4 py-2 hover:bg-accent rounded-md">Schedule Interview</button>
            <button className="w-full text-left px-4 py-2 hover:bg-accent rounded-md">Review Applications</button>
            <button className="w-full text-left px-4 py-2 hover:bg-accent rounded-md">Start Performance Review</button>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {[
              { id: 1, desc: "New hire: John Doe", role: "Senior Developer", date: "2024-01-15" },
              { id: 2, desc: "Interview scheduled", role: "Product Manager", date: "2024-01-14" },
              { id: 3, desc: "Performance review", role: "Marketing Lead", date: "2024-01-13" },
              { id: 4, desc: "Training completed", role: "Sales Representative", date: "2024-01-12" },
            ].map((activity) => (
              <div key={activity.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{activity.desc}</p>
                  <p className="text-sm text-muted-foreground">{activity.role}</p>
                </div>
                <span className="text-sm text-muted-foreground">{activity.date}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
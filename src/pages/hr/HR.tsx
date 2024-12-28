import { Card } from "@/components/ui/card";
import { Users, UserPlus, Target, Building2 } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";

export default function HR() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Human Resources</h1>
        <p className="text-muted-foreground mt-2">Manage your organization's workforce</p>
      </div>

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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          {/* Add quick action buttons */}
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Recent Activities</h3>
          {/* Add recent activities list */}
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Upcoming Events</h3>
          {/* Add upcoming events list */}
        </Card>
      </div>
    </div>
  );
}
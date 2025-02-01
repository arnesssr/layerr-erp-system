import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { StatsCard } from "@/components/StatsCard";
import { Users, Target, HeartHandshake, PhoneCall } from "lucide-react";

const crmModules = [
  {
    title: "Sales Automation",
    path: "/crm/sales-automation",
    description: "Automate your sales processes"
  },
  {
    title: "Customer Service",
    path: "/crm/customer-service",
    description: "Manage customer support and service"
  },
  {
    title: "Sales Force",
    path: "/crm/sales-force",
    description: "Manage your sales team and activities"
  }
];

export default function CRM() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Customer Relationship Management</h1>
        <p className="text-muted-foreground mt-2">Manage customer relationships and sales pipeline</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Customers"
          value="2,543"
          icon={Users}
          change="+12%"
          changeType="positive"
        />
        <StatsCard
          title="Active Leads"
          value="164"
          icon={Target}
          change="+8.2%"
          changeType="positive"
        />
        <StatsCard
          title="Deals Won"
          value="89"
          icon={HeartHandshake}
          change="+23.1%"
          changeType="positive"
        />
        <StatsCard
          title="Support Tickets"
          value="45"
          icon={PhoneCall}
          change="-5%"
          changeType="negative"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {crmModules.map((module) => (
          <Link key={module.path} to={module.path}>
            <Card className="p-6 hover:bg-accent/50 transition-colors">
              <h3 className="text-lg font-semibold">{module.title}</h3>
              <p className="text-muted-foreground mt-2">{module.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsCard } from "@/components/StatsCard";
import { Users, Target, HeartHandshake, PhoneCall } from "lucide-react";

export default function CRM() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Customer Relationship Management</h1>
        <p className="text-muted-foreground mt-2">Manage your customer relationships and sales pipeline</p>
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

      {/* Main Content Tabs */}
      <Card>
        <Tabs defaultValue="overview" className="p-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="deals">Deals</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold">Sales Overview</h3>
            <p className="text-muted-foreground">
              Track your sales performance and customer metrics at a glance.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-4">
                <h4 className="font-medium mb-2">Recent Activities</h4>
                <div className="space-y-2">
                  {[
                    "New lead: Tech Solutions Inc",
                    "Deal closed: Marketing Campaign",
                    "Meeting scheduled: Product Demo",
                    "Support ticket resolved: #1234",
                  ].map((activity, index) => (
                    <div key={index} className="text-sm p-2 hover:bg-accent rounded-md">
                      {activity}
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="p-4">
                <h4 className="font-medium mb-2">Quick Actions</h4>
                <div className="space-y-2">
                  <button className="w-full text-left p-2 hover:bg-accent rounded-md">Add New Customer</button>
                  <button className="w-full text-left p-2 hover:bg-accent rounded-md">Create Lead</button>
                  <button className="w-full text-left p-2 hover:bg-accent rounded-md">Schedule Meeting</button>
                  <button className="w-full text-left p-2 hover:bg-accent rounded-md">Generate Report</button>
                </div>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="customers" className="mt-4">
            <h3 className="text-lg font-semibold mb-4">Customer Management</h3>
            <p className="text-muted-foreground">Customer content coming soon...</p>
          </TabsContent>
          
          <TabsContent value="leads" className="mt-4">
            <h3 className="text-lg font-semibold mb-4">Lead Tracking</h3>
            <p className="text-muted-foreground">Lead management content coming soon...</p>
          </TabsContent>
          
          <TabsContent value="deals" className="mt-4">
            <h3 className="text-lg font-semibold mb-4">Deal Pipeline</h3>
            <p className="text-muted-foreground">Deal tracking content coming soon...</p>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
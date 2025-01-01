import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { Users, Target, HeartHandshake, PhoneCall, Plus } from "lucide-react";
import { toast } from "sonner";

export default function CRM() {
  const handleQuickAction = (action: string) => {
    toast.success(`${action} initiated`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Customer Relationship Management</h1>
          <p className="text-muted-foreground mt-2">Manage your customer relationships and sales pipeline</p>
        </div>
        <Button onClick={() => handleQuickAction("New Customer")} className="gap-2">
          <Plus className="h-4 w-4" /> Add Customer
        </Button>
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
      <Card className="p-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="deals">Deals</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
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
                    <div key={index} className="text-sm p-2 hover:bg-accent rounded-md cursor-pointer">
                      {activity}
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="p-4">
                <h4 className="font-medium mb-2">Quick Actions</h4>
                <div className="space-y-2">
                  {[
                    "Add New Customer",
                    "Create Lead",
                    "Schedule Meeting",
                    "Generate Report",
                  ].map((action, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => handleQuickAction(action)}
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="customers" className="space-y-4">
            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">Customer Management</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">Enhanced customer management features coming soon...</p>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="leads" className="space-y-4">
            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">Lead Tracking</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">Advanced lead tracking features coming soon...</p>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="deals" className="space-y-4">
            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">Deal Pipeline</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">Deal management features coming soon...</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">Sales Analytics</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">Detailed analytics dashboard coming soon...</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsCard } from "@/components/StatsCard";
import { Package, AlertTriangle, TrendingUp, Truck, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Inventory() {
  const handleQuickAction = (action: string) => {
    toast.success(`${action} initiated`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Inventory Management</h1>
          <p className="text-muted-foreground mt-2">Track and manage your inventory efficiently</p>
        </div>
        <Button onClick={() => handleQuickAction("New Item")} className="gap-2">
          <Plus className="h-4 w-4" /> Add Item
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Items"
          value="1,234"
          icon={Package}
          change="+5%"
          changeType="positive"
        />
        <StatsCard
          title="Low Stock"
          value="45"
          icon={AlertTriangle}
          change="+8"
          changeType="negative"
        />
        <StatsCard
          title="Stock Value"
          value="$234,567"
          icon={TrendingUp}
          change="+12%"
          changeType="positive"
        />
        <StatsCard
          title="Pending Orders"
          value="23"
          icon={Truck}
          change="-15%"
          changeType="positive"
        />
      </div>

      <Card className="p-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="stock">Stock Management</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-4">
                <h4 className="font-medium mb-2">Recent Activities</h4>
                <div className="space-y-2">
                  {[
                    "New stock received: Office Supplies",
                    "Low stock alert: Printer Paper",
                    "Order fulfilled: #ORD-2024-001",
                    "Inventory count updated: Electronics",
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
                    "Add New Item",
                    "Create Purchase Order",
                    "Start Stock Count",
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

          <TabsContent value="stock" className="space-y-4">
            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">Stock Management</h3>
              <p className="text-muted-foreground">Enhanced stock management features coming soon...</p>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">Order Management</h3>
              <p className="text-muted-foreground">Order tracking and management features coming soon...</p>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">Inventory Reports</h3>
              <p className="text-muted-foreground">Detailed reporting features coming soon...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
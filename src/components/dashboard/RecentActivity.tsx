import { Card } from "@/components/ui/card";

export function RecentActivity() {
  return (
    <Card className="p-8 bg-background/50 border-border backdrop-blur-sm">
      <h2 className="text-xl font-bold text-foreground mb-4">Recent Activity</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-foreground">New order received</span>
          </div>
          <span className="text-muted-foreground text-sm">2 mins ago</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-foreground">Payment processed</span>
          </div>
          <span className="text-muted-foreground text-sm">15 mins ago</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-foreground">Low inventory alert</span>
          </div>
          <span className="text-muted-foreground text-sm">1 hour ago</span>
        </div>
      </div>
    </Card>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";

export function RecentActivities() {
  return (
    <Card className="col-span-3 lg:col-span-1">
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

const activities = [
  {
    title: "New order #1234 received",
    timestamp: "2 minutes ago"
  },
  {
    title: "Invoice #5678 paid",
    timestamp: "5 minutes ago"
  },
  // Add more activities as needed
];

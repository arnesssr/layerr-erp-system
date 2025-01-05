import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function IntegrationConfig() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Integration Settings</h3>
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="sync-interval">Sync Interval (minutes)</Label>
            <Input id="sync-interval" type="number" defaultValue="15" />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="auto-sync">Auto Sync</Label>
              <p className="text-sm text-gray-500">Enable automatic synchronization</p>
            </div>
            <Switch id="auto-sync" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="batch-size">Batch Size</Label>
            <Input id="batch-size" type="number" defaultValue="50" />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Error Handling</h3>
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="retry-attempts">Retry Attempts</Label>
            <Input id="retry-attempts" type="number" defaultValue="3" />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="error-notifications">Error Notifications</Label>
              <p className="text-sm text-gray-500">Send notifications on errors</p>
            </div>
            <Switch id="error-notifications" defaultChecked />
          </div>
        </div>
      </Card>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Reset</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}

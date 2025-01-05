import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntegrationStore } from "@/lib/services/integrationService";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw,
  Link2,
  Database,
  Settings,
  Server,
  Check,
  X
} from "lucide-react";

interface System {
  name: string;
  status: 'online' | 'offline' | 'degraded';
}

interface Log {
  timestamp: string;
  action: string;
  status: 'success' | 'error';
  details?: string;
}

interface StatusCardsProps {
  stats: {
    sales: number;
    purchase: number;
    accounting: number;
  };
  syncStatus: string;
  systemStatus: System[];
}

function StatusCards({ stats, syncStatus, systemStatus }: StatusCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            System Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          {systemStatus.map((system) => (
            <div key={system.name} className="flex justify-between items-center">
              <span>{system.name}</span>
              <StatusIndicator status={system.status} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

interface ConfigurationTabsProps {
  webhookUrl: string;
  setWebhookUrl: (url: string) => void;
  onWebhookSubmit: () => void;
}

function ConfigurationTabs({ webhookUrl, setWebhookUrl, onWebhookSubmit }: ConfigurationTabsProps) {
  return (
    <Tabs defaultValue="webhooks">
      <TabsList>
        <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
        <TabsTrigger value="api">API</TabsTrigger>
      </TabsList>
      <TabsContent value="webhooks">
        <Card>
          <CardContent className="space-y-4 pt-4">
            <Input
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              placeholder="Enter webhook URL"
            />
            <Button onClick={onWebhookSubmit}>Test Webhook</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

function ActivityLog({ logs }: { logs: Log[] }) {
  return (
    <ScrollArea className="h-[200px]">
      <div className="space-y-4">
        {logs.map((log, index) => (
          <div key={index} className="flex items-center justify-between border-b pb-2">
            <div>
              <p className="font-medium">{log.action}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(log.timestamp).toLocaleString()}
              </p>
            </div>
            <Badge variant={log.status === 'success' ? 'default' : 'destructive'}>
              {log.status}
            </Badge>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

const IntegrationMonitor: React.FC = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Integration Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Last Sync</span>
              <span className="text-muted-foreground">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Status</span>
              <span className="text-green-500">Connected</span>
            </div>
            <Button>Sync Now</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntegrationMonitor;

function LoadingState() {
  return (
    <div className="flex items-center justify-center h-[200px]">
      <RefreshCw className="h-8 w-8 animate-spin" />
    </div>
  );
}

function Header({ onRefresh }) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold">Integration Hub</h2>
      <Button variant="outline" onClick={onRefresh}>
        <RefreshCw className="mr-2 h-4 w-4" />
        Refresh Status
      </Button>
    </div>
  );
}

// ...existing helper components (StatusCards, ConfigurationTabs, ActivityLog)...

function StatusIndicator({ status }) {
  const colors = {
    online: 'text-green-500',
    offline: 'text-red-500',
    degraded: 'text-yellow-500'
  };

  return (
    <span className={`flex items-center ${colors[status]}`}>
      {status === 'online' ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
      <span className="ml-1 text-sm">{status}</span>
    </span>
  );
}

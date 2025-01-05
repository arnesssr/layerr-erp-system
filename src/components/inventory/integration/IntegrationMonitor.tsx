import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntegrationStore } from "@/lib/services/integrationService";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { 
  ArrowDownUp, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw,
  Link2,
  Database,
  CloudUpload,
  CloudDownload,
  Server,
  Settings,
  Import,
  Export
} from "lucide-react";

export default function IntegrationMonitor() {
  const { 
    pendingTransactions, 
    processedTransactions, 
    syncStatus,
    integrationStatus,
    checkSystemStatus
  } = useIntegrationStore();

  const [webhookUrl, setWebhookUrl] = useState("");
  const { toast } = useToast();

  const moduleStats = {
    sales: processedTransactions.filter(t => t.module === 'sales').length,
    purchase: processedTransactions.filter(t => t.module === 'purchase').length,
    accounting: processedTransactions.filter(t => t.module === 'accounting').length,
  };

  const handleWebhookSubmit = async () => {
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter a valid webhook URL",
        variant: "destructive"
      });
      return;
    }

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: "test" }),
      });
      toast({
        title: "Success",
        description: "Webhook test successful"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to test webhook",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {integrationStatus.systems.map((system) => (
                <div key={system.name} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{system.name}</span>
                  <Badge 
                    variant={system.status === 'online' ? 'default' : 'destructive'}
                    className="flex items-center gap-1"
                  >
                    {system.status === 'online' ? (
                      <CheckCircle2 className="h-3 w-3" />
                    ) : (
                      <AlertTriangle className="h-3 w-3" />
                    )}
                    {system.status}
                  </Badge>
                </div>
              ))}
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => checkSystemStatus()}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Status
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CloudUpload className="h-5 w-5" />
              Sync Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Last Sync</span>
                <Badge variant={getSyncStatusVariant(syncStatus)}>
                  {syncStatus === 'syncing' && (
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {getSyncStatusText(syncStatus)}
                </Badge>
              </div>
              <Progress 
                value={integrationStatus.metrics.successfulSync} 
                className="h-2"
              />
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Success</p>
                  <p className="font-medium">
                    {integrationStatus.metrics.successfulSync}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Failed</p>
                  <p className="font-medium text-destructive">
                    {integrationStatus.metrics.failedSync}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              Module Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(moduleStats).map(([module, count]) => (
                <div key={module} className="flex items-center justify-between">
                  <span className="capitalize text-sm font-medium">{module}</span>
                  <Badge variant="secondary">{count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Integration Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="webhooks" className="space-y-4">
            <TabsList>
              <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
              <TabsTrigger value="sync">Sync Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="webhooks" className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter webhook URL"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                />
                <Button onClick={handleWebhookSubmit}>
                  Test Webhook
                </Button>
              </div>
              
              <Alert>
                <Link2 className="h-4 w-4" />
                <AlertTitle>Webhook Configuration</AlertTitle>
                <AlertDescription>
                  Configure webhooks to receive real-time updates about inventory changes.
                </AlertDescription>
              </Alert>
            </TabsContent>
            
            <TabsContent value="api" className="space-y-4">
              <Alert>
                <Settings className="h-4 w-4" />
                <AlertTitle>API Configuration</AlertTitle>
                <AlertDescription>
                  Manage API keys and access settings for external integrations.
                </AlertDescription>
              </Alert>
            </TabsContent>
            
            <TabsContent value="sync" className="space-y-4">
              <Alert>
                <RefreshCw className="h-4 w-4" />
                <AlertTitle>Sync Settings</AlertTitle>
                <AlertDescription>
                  Configure synchronization intervals and data mapping rules.
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px]">
            <div className="space-y-4">
              {integrationStatus.logs.map((log, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{log.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(log.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <Badge 
                    variant={log.status === 'success' ? 'default' : 'destructive'}
                  >
                    {log.status}
                  </Badge>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}

function getSyncStatusVariant(status: 'idle' | 'syncing' | 'error'): "default" | "secondary" | "destructive" {
  switch (status) {
    case 'idle':
      return 'default';
    case 'syncing':
      return 'secondary';
    case 'error':
      return 'destructive';
  }
}

function getSyncStatusText(status: 'idle' | 'syncing' | 'error'): string {
  switch (status) {
    case 'idle':
      return 'Synced';
    case 'syncing':
      return 'Syncing...';
    case 'error':
      return 'Sync Failed';
  }
}
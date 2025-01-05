import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIntegrationStore } from "@/lib/services/integrationService";
import {
  LineChart,
  Settings,
  AlertCircle,
  RefreshCw,
  Check,
  X,
  AlertTriangle
} from "lucide-react";
import { IntegrationConfig } from './IntegrationConfig';
import { IntegrationAnalytics } from './IntegrationAnalytics';
import { ApiGateway } from './ApiGateway';

export default function IntegrationMonitor() {
  const {
    pendingTransactions,
    processedTransactions,
    syncStatus,
    integrationStatus,
    checkSystemStatus
  } = useIntegrationStore();

  // Add loading state check
  if (!integrationStatus) {
    return (
      <div className="flex items-center justify-center h-[200px]">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Loading integration status...</p>
        </div>
      </div>
    );
  }

  // Add error state check
  if (syncStatus === 'error') {
    return (
      <div className="p-4 border border-red-200 bg-red-50 rounded">
        <div className="flex items-center gap-2 text-red-600">
          <AlertTriangle className="h-5 w-5" />
          <p>Failed to load integration status</p>
        </div>
        <Button 
          variant="outline" 
          className="mt-4"
          onClick={() => checkSystemStatus()}
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Integration Hub</h2>
        <div className="space-x-2">
          <Button variant="outline" onClick={() => checkSystemStatus()}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Status
          </Button>
          <Button>
            <Settings className="mr-2 h-4 w-4" />
            Configure
          </Button>
        </div>
      </div>

      <Tabs defaultValue="dashboard">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="systems">Systems</TabsTrigger>
          <TabsTrigger value="logs">Logs & Errors</TabsTrigger>
          <TabsTrigger value="config">Configuration</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="api">API Gateway</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-4">
              <h3 className="font-medium">Sync Status</h3>
              <p className="mt-2">{syncStatus}</p>
              <p className="text-sm text-gray-500">
                Pending: {pendingTransactions?.length || 0}
              </p>
              <p className="text-sm text-gray-500">
                Processed: {processedTransactions?.length || 0}
              </p>
            </Card>

            <Card className="p-4">
              <h3 className="font-medium">System Health</h3>
              <p className="mt-2">{integrationStatus.healthCheck.overall}</p>
              <p className="text-sm text-gray-500">
                Last Updated: {new Date(integrationStatus.healthCheck.lastUpdated).toLocaleString()}
              </p>
            </Card>

            <Card className="p-4">
              <h3 className="font-medium">Connected Systems</h3>
              <div className="mt-2">
                {integrationStatus.systems.map(system => (
                  <div key={system.name} className="flex justify-between items-center">
                    <span>{system.name}</span>
                    <span className={system.status === 'online' ? 'text-green-500' : 'text-red-500'}>
                      {system.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-medium flex items-center">
                <LineChart className="mr-2 h-4 w-4" />
                Analytics
              </h3>
              <div className="mt-2">
                <p>Success Rate: {calculateSuccessRate()}%</p>
                <p>Avg Response: {integrationStatus.metrics.averageResponseTime}ms</p>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="systems">
          <SystemsGrid systems={integrationStatus.systems} />
        </TabsContent>

        <TabsContent value="logs">
          <ErrorLogs errors={integrationStatus.errors} />
        </TabsContent>

        <TabsContent value="config">
          <IntegrationConfig />
        </TabsContent>

        <TabsContent value="analytics">
          <IntegrationAnalytics />
        </TabsContent>

        <TabsContent value="api">
          <ApiGateway />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function calculateSuccessRate(): number {
  // Implementation
  return 0;
}

// Add these new components in separate files later
function SystemsGrid({ systems }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {systems.map(system => (
        <Card key={system.name} className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">{system.name}</h3>
            <StatusIndicator status={system.status} />
          </div>
          {/* System details */}
        </Card>
      ))}
    </div>
  );
}

function ErrorLogs({ errors }) {
  return (
    <div className="space-y-4">
      {errors.map(error => (
        <Card key={error.timestamp} className="p-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <div>
              <p className="font-medium">{error.system}</p>
              <p className="text-sm text-gray-500">{error.error}</p>
              <p className="text-xs text-gray-400">
                {new Date(error.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { useIntegrationStore } from "@/lib/services/integrationService";
import { 
  ArrowDownUp, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw,
  ShoppingCart,
  Calculator,
  Building2
} from "lucide-react";

export default function IntegrationMonitor() {
  const {
    pendingTransactions,
    processedTransactions,
    syncStatus,
    integrationStatus
  } = useIntegrationStore(state => ({
    pendingTransactions: state.pendingTransactions,
    processedTransactions: state.processedTransactions,
    syncStatus: state.syncStatus,
    integrationStatus: state.integrationStatus
  }));

  return (
    <div className="space-y-4">
      <div className="p-4 border rounded">
        <h3 className="font-medium">Integration Status</h3>
        <p>Sync Status: {syncStatus}</p>
        <p>Pending Transactions: {pendingTransactions.length}</p>
        <p>Processed Transactions: {processedTransactions.length}</p>
      </div>
      
      {/* Health Status */}
      <div className="p-4 border rounded">
        <h3 className="font-medium">System Health</h3>
        <p>Overall: {integrationStatus.healthCheck.overall}</p>
        <p>Last Updated: {new Date(integrationStatus.healthCheck.lastUpdated).toLocaleString()}</p>
      </div>
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

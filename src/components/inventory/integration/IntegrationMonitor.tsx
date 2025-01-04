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
    syncStatus 
  } = useIntegrationStore();

  const moduleStats = {
    sales: processedTransactions.filter(t => t.module === 'sales').length,
    purchase: processedTransactions.filter(t => t.module === 'purchase').length,
    accounting: processedTransactions.filter(t => t.module === 'accounting').length,
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <ArrowDownUp className="h-5 w-5" />
            Module Integration Status
          </CardTitle>
          <Badge variant={getSyncStatusVariant(syncStatus)}>
            {syncStatus === 'syncing' && <RefreshCw className="mr-2 h-4 w-4 animate-spin" />}
            {syncStatus === 'error' && <AlertTriangle className="mr-2 h-4 w-4" />}
            {syncStatus === 'idle' && <CheckCircle2 className="mr-2 h-4 w-4" />}
            {getSyncStatusText(syncStatus)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        // ...rest of the component implementation...
      </CardContent>
    </Card>
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

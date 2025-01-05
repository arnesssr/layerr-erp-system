import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

export function ApiGateway() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">API Gateway Configuration</h3>
        
        <div className="space-y-6">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="rate-limiting">Rate Limiting</Label>
                <p className="text-sm text-gray-500">Limit API requests per minute</p>
              </div>
              <Switch id="rate-limiting" defaultChecked />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="request-limit">Request Limit</Label>
              <Input id="request-limit" type="number" defaultValue="100" />
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">Active Endpoints</h4>
            {mockEndpoints.map(endpoint => (
              <div key={endpoint.path} className="flex items-center justify-between py-2">
                <div>
                  <p className="font-mono text-sm">{endpoint.path}</p>
                  <p className="text-sm text-gray-500">{endpoint.method}</p>
                </div>
                <Badge variant={endpoint.status === 'active' ? 'default' : 'secondary'}>
                  {endpoint.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

const mockEndpoints = [
  { path: '/api/inventory/sync', method: 'POST', status: 'active' },
  { path: '/api/inventory/status', method: 'GET', status: 'active' },
  { path: '/api/integration/health', method: 'GET', status: 'active' },
];

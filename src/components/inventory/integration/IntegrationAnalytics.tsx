import { Card } from "@/components/ui/card";
import { useIntegrationStore } from "@/lib/services/integrationService";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export function IntegrationAnalytics() {
  const { integrationStatus } = useIntegrationStore();

  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">Integration Performance</h3>
      <div className="space-y-6">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={generatePerformanceData()}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="responseTime" stroke="#2563eb" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <MetricCard
            title="Success Rate"
            value={`${calculateSuccessRate(integrationStatus)}%`}
            trend="up"
          />
          <MetricCard
            title="Avg Response Time"
            value={`${integrationStatus.metrics.averageResponseTime}ms`}
            trend="down"
          />
          <MetricCard
            title="Active Connections"
            value={integrationStatus.metrics.activeConnections}
            trend="neutral"
          />
        </div>
      </div>
    </Card>
  );
}

function MetricCard({ title, value, trend }) {
  return (
    <div className="p-4 border rounded-lg">
      <h4 className="text-sm font-medium text-gray-500">{title}</h4>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}

function generatePerformanceData() {
  // Mock data generator for demo
  return Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    responseTime: Math.floor(Math.random() * 100) + 50
  }));
}

function calculateSuccessRate(status: any) {
  const { successfulSync, failedSync } = status.metrics;
  const total = successfulSync + failedSync;
  return total ? Math.round((successfulSync / total) * 100) : 100;
}

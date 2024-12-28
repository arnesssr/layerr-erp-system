import { Card } from "@/components/ui/card";
import { DollarSign, CreditCard, BookOpen, Calculator, Receipt } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";

export default function Finance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Financial Management</h1>
        <p className="text-muted-foreground mt-2">Manage your organization's financial operations</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$54,234"
          icon={DollarSign}
          change="+12.5%"
          changeType="positive"
        />
        <StatsCard
          title="Accounts Payable"
          value="$12,543"
          icon={CreditCard}
          change="-2.5%"
          changeType="negative"
        />
        <StatsCard
          title="Accounts Receivable"
          value="$23,789"
          icon={Receipt}
          change="+8.2%"
          changeType="positive"
        />
        <StatsCard
          title="Net Profit"
          value="$18,902"
          icon={Calculator}
          change="+5.4%"
          changeType="positive"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          {/* Add quick action buttons */}
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Recent Transactions</h3>
          {/* Add recent transactions list */}
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Financial Reports</h3>
          {/* Add reports list */}
        </Card>
      </div>
    </div>
  );
}
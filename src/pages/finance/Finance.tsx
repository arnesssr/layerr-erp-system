import { Card } from "@/components/ui/card";
import { DollarSign, CreditCard, BookOpen, Calculator, Receipt } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";

const financialData = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 2000, expenses: 9800 },
  { month: 'Apr', revenue: 2780, expenses: 3908 },
  { month: 'May', revenue: 1890, expenses: 4800 },
];

const modules = [
  { title: "General Ledger", path: "/finance/ledger", description: "View and manage your general ledger entries" },
  { title: "Accounts Payable", path: "/finance/payable", description: "Manage vendor payments and expenses" },
  { title: "Accounts Receivable", path: "/finance/receivable", description: "Track customer payments and invoices" },
  { title: "Budgeting", path: "/finance/budgeting", description: "Plan and manage financial budgets" },
  { title: "Tax Management", path: "/finance/tax", description: "Handle tax-related activities and compliance" },
];

export default function Finance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Financial Management</h1>
        <p className="text-muted-foreground mt-2">Track and manage your organization's financial operations</p>
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

      <div className="grid gap-6 md:grid-cols-2">
        {modules.map((module) => (
          <Link key={module.path} to={module.path}>
            <Card className="p-6 hover:bg-accent/50 transition-colors">
              <h3 className="text-lg font-semibold">{module.title}</h3>
              <p className="text-muted-foreground mt-2">{module.description}</p>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">Financial Overview</h3>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={financialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#0EA5E9" strokeWidth={2} />
              <Line type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
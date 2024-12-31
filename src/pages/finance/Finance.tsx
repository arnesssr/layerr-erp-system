import { Card } from "@/components/ui/card";
import { DollarSign, CreditCard, BookOpen, Calculator, Receipt } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data for the financial chart
const financialData = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 2000, expenses: 9800 },
  { month: 'Apr', revenue: 2780, expenses: 3908 },
  { month: 'May', revenue: 1890, expenses: 4800 },
  { month: 'Jun', revenue: 2390, expenses: 3800 },
];

export default function Finance() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold">Financial Management</h1>
        <p className="text-muted-foreground mt-2">Track and manage your organization's financial operations</p>
      </div>

      {/* Stats Grid */}
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

      {/* Financial Chart */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Financial Overview</h3>
        <div className="w-full h-[300px]">
          <LineChart
            width={800}
            height={300}
            data={financialData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#0EA5E9" strokeWidth={2} />
            <Line type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={2} />
          </LineChart>
        </div>
      </Card>

      {/* Quick Actions and Recent Transactions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 hover:bg-accent rounded-md">Create Invoice</button>
            <button className="w-full text-left px-4 py-2 hover:bg-accent rounded-md">Record Payment</button>
            <button className="w-full text-left px-4 py-2 hover:bg-accent rounded-md">Add Expense</button>
            <button className="w-full text-left px-4 py-2 hover:bg-accent rounded-md">Generate Report</button>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Recent Transactions</h3>
          <div className="space-y-4">
            {[
              { id: 1, desc: "Office Supplies", amount: "-$234.56", date: "2024-01-15" },
              { id: 2, desc: "Client Payment", amount: "+$1,234.00", date: "2024-01-14" },
              { id: 3, desc: "Software License", amount: "-$599.99", date: "2024-01-13" },
              { id: 4, desc: "Consulting Fee", amount: "+$2,500.00", date: "2024-01-12" },
            ].map((transaction) => (
              <div key={transaction.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{transaction.desc}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
                <span className={transaction.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
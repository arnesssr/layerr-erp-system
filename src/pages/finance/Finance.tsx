import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const financeModules = [
  {
    title: "General Ledger",
    path: "/finance/ledger",
    description: "View and manage your general ledger entries"
  },
  {
    title: "Accounts Payable",
    path: "/finance/payable",
    description: "Manage vendor payments and expenses"
  },
  {
    title: "Accounts Receivable",
    path: "/finance/receivable",
    description: "Track customer payments and invoices"
  },
  {
    title: "Budgeting",
    path: "/finance/budgeting",
    description: "Plan and manage financial budgets"
  },
  {
    title: "Tax Management",
    path: "/finance/tax",
    description: "Handle tax-related activities and compliance"
  }
];

export default function Finance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Financial Management</h1>
        <p className="text-muted-foreground mt-2">Track and manage your organization's financial operations</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {financeModules.map((module) => (
          <Link key={module.path} to={module.path}>
            <Card className="p-6 hover:bg-accent/50 transition-colors">
              <h3 className="text-lg font-semibold">{module.title}</h3>
              <p className="text-muted-foreground mt-2">{module.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
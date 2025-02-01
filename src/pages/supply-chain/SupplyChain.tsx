import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const supplyChainModules = [
  {
    title: "Inventory",
    path: "/supply-chain/inventory",
    description: "Manage stock levels and inventory tracking"
  },
  {
    title: "Procurement",
    path: "/supply-chain/procurement",
    description: "Handle purchasing and vendor management"
  },
  {
    title: "Orders",
    path: "/supply-chain/orders",
    description: "Track and manage customer orders"
  },
  {
    title: "Warehouse",
    path: "/supply-chain/warehouse",
    description: "Manage warehouse operations and logistics"
  }
];

export default function SupplyChain() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Supply Chain Management</h1>
        <p className="text-muted-foreground mt-2">Overview of supply chain operations</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {supplyChainModules.map((module) => (
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
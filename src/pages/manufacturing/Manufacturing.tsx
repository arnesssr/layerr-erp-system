import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const manufacturingModules = [
  {
    title: "Production",
    path: "/manufacturing/production",
    description: "Manage production planning and execution"
  },
  {
    title: "Quality Control",
    path: "/manufacturing/quality",
    description: "Monitor and maintain product quality"
  },
  {
    title: "Bill of Materials",
    path: "/manufacturing/bom",
    description: "Manage product components and materials"
  }
];

export default function Manufacturing() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Manufacturing</h1>
        <p className="text-muted-foreground mt-2">Manage manufacturing operations</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {manufacturingModules.map((module) => (
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
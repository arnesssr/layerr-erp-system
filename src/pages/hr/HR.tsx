import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const hrModules = [
  {
    title: "Payroll",
    path: "/hr/payroll",
    description: "Manage employee salaries and compensation"
  },
  {
    title: "Employees",
    path: "/hr/employees",
    description: "View and manage employee records"
  },
  {
    title: "Recruitment",
    path: "/hr/recruitment",
    description: "Handle hiring processes and job postings"
  },
  {
    title: "Performance",
    path: "/hr/performance",
    description: "Track employee performance and reviews"
  }
];

export default function HR() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Human Resources</h1>
        <p className="text-muted-foreground mt-2">Manage your organization's workforce</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {hrModules.map((module) => (
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
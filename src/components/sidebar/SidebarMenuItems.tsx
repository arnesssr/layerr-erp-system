import {
  LayoutDashboard,
  DollarSign,
  Users,
  ShoppingCart,
  Package,
  FolderKanban,
  Settings,
  Building2,
  Truck,
  BarChart3,
  Factory,
  Warehouse,
  ClipboardList,
  CreditCard,
  BookOpen,
  Calculator,
  Receipt,
  Box,
  ShoppingBag,
  UserPlus,
  Target,
  HeartHandshake,
  Megaphone,
  Headphones,
  ClipboardCheck,
  Timer,
  ScrollText,
  HelpCircle,
  BarChart,
  Network,
} from "lucide-react";

export const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
    subItems: [
      { title: "Overview", path: "/" },
      { title: "Reports", path: "/reports" },
      { title: "Notifications", path: "/notifications" },
    ]
  },
  {
    title: "Sales & CRM",
    path: "/crm",
    icon: HeartHandshake,
    subItems: [
      { title: "Customer Management", path: "/crm/customers" },
      { title: "Lead Tracking", path: "/crm/leads" },
      { title: "Orders", path: "/crm/orders" },
      { title: "Sales Analytics", path: "/crm/analytics" },
    ]
  },
  {
    title: "Finance",
    path: "/finance",
    icon: DollarSign,
    subItems: [
      { title: "General Ledger", path: "/finance/ledger" },
      { title: "Accounts Payable", path: "/finance/payable" },
      { title: "Accounts Receivable", path: "/finance/receivable" },
      { title: "Budgeting", path: "/finance/budgeting" },
      { title: "Tax Management", path: "/finance/tax" },
    ]
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: Package,
    subItems: [
      { title: "Stock Management", path: "/inventory/stock" },
      { title: "Barcode Scanning", path: "/inventory/barcode" },
      { title: "Tracking", path: "/inventory/tracking" },
      { title: "Transfers", path: "/inventory/transfers" },
    ]
  },
  {
    title: "Procurement",
    path: "/procurement",
    icon: ShoppingCart,
    subItems: [
      { title: "Suppliers", path: "/procurement/suppliers" },
      { title: "Purchase Orders", path: "/procurement/orders" },
      { title: "Approvals", path: "/procurement/approvals" },
      { title: "Analytics", path: "/procurement/analytics" },
    ]
  },
  {
    title: "Manufacturing",
    path: "/manufacturing",
    icon: Factory,
    subItems: [
      { title: "BOM", path: "/manufacturing/bom" },
      { title: "Production", path: "/manufacturing/production" },
      { title: "Work Orders", path: "/manufacturing/orders" },
      { title: "Performance", path: "/manufacturing/performance" },
    ]
  },
  {
    title: "Supply Chain",
    path: "/supply-chain",
    icon: Truck,
    subItems: [
      { title: "Logistics", path: "/supply-chain/logistics" },
      { title: "Forecasting", path: "/supply-chain/forecasting" },
      { title: "Routes", path: "/supply-chain/routes" },
    ]
  },
  {
    title: "HR",
    path: "/hr",
    icon: Users,
    subItems: [
      { title: "Directory", path: "/hr/directory" },
      { title: "Payroll", path: "/hr/payroll" },
      { title: "Attendance", path: "/hr/attendance" },
      { title: "Recruitment", path: "/hr/recruitment" },
      { title: "Performance", path: "/hr/performance" },
    ]
  },
  {
    title: "Projects",
    path: "/projects",
    icon: FolderKanban,
    subItems: [
      { title: "Tasks", path: "/projects/tasks" },
      { title: "Milestones", path: "/projects/milestones" },
      { title: "Resources", path: "/projects/resources" },
    ]
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart,
    subItems: [
      { title: "Reports", path: "/analytics/reports" },
      { title: "Visualizations", path: "/analytics/visualizations" },
      { title: "Predictions", path: "/analytics/predictions" },
    ]
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
    subItems: [
      { title: "User Roles", path: "/settings/roles" },
      { title: "Configuration", path: "/settings/config" },
      { title: "Integrations", path: "/settings/integrations" },
      { title: "Calendar", path: "/settings/calendar" },
    ]
  },
  {
    title: "Support",
    path: "/support",
    icon: HelpCircle,
    subItems: [
      { title: "Knowledge Base", path: "/support/kb" },
      { title: "Contact", path: "/support/contact" },
      { title: "Tickets", path: "/support/tickets" },
    ]
  },
];
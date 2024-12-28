import { 
  LayoutDashboard, 
  DollarSign, 
  Users, 
  ShoppingCart, 
  Package, 
  FolderKanban,
  Settings,
  MessageSquare,
  Calendar,
  FileText,
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
  ScrollText
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Financial Management",
    path: "/finance",
    icon: DollarSign,
    subItems: [
      {
        title: "Accounts Payable",
        path: "/finance/payable"
      },
      {
        title: "Accounts Receivable",
        path: "/finance/receivable"
      },
      {
        title: "General Ledger",
        path: "/finance/ledger"
      },
      {
        title: "Budgeting",
        path: "/finance/budgeting"
      },
      {
        title: "Tax Management",
        path: "/finance/tax"
      }
    ]
  },
  {
    title: "Supply Chain",
    path: "/supply-chain",
    icon: Truck,
    subItems: [
      {
        title: "Inventory",
        path: "/supply-chain/inventory"
      },
      {
        title: "Procurement",
        path: "/supply-chain/procurement"
      },
      {
        title: "Orders",
        path: "/supply-chain/orders"
      },
      {
        title: "Warehouse",
        path: "/supply-chain/warehouse"
      }
    ]
  },
  {
    title: "Human Resources",
    path: "/hr",
    icon: Users,
    subItems: [
      {
        title: "Payroll",
        path: "/hr/payroll"
      },
      {
        title: "Employee Records",
        path: "/hr/employees"
      },
      {
        title: "Recruitment",
        path: "/hr/recruitment"
      },
      {
        title: "Performance",
        path: "/hr/performance"
      }
    ]
  },
  {
    title: "CRM",
    path: "/crm",
    icon: HeartHandshake,
    subItems: [
      {
        title: "Sales Automation",
        path: "/crm/sales-automation"
      },
      {
        title: "Customer Service",
        path: "/crm/customer-service"
      },
      {
        title: "Sales Force",
        path: "/crm/sales-force"
      }
    ]
  },
  {
    title: "Manufacturing",
    path: "/manufacturing",
    icon: Factory,
    subItems: [
      {
        title: "Production Planning",
        path: "/manufacturing/production"
      },
      {
        title: "Quality Control",
        path: "/manufacturing/quality"
      },
      {
        title: "Bill of Materials",
        path: "/manufacturing/bom"
      }
    ]
  },
  {
    title: "Project Management",
    path: "/projects",
    icon: FolderKanban,
    subItems: [
      {
        title: "Resource Allocation",
        path: "/projects/resources"
      },
      {
        title: "Time Tracking",
        path: "/projects/time"
      },
      {
        title: "Project Accounting",
        path: "/projects/accounting"
      }
    ]
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: MessageSquare,
    subItems: [
      {
        title: "Inbox",
        path: "/messages/inbox"
      },
      {
        title: "Sent",
        path: "/messages/sent"
      }
    ]
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: Calendar,
  },
  {
    title: "Documents",
    path: "/documents",
    icon: FileText,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="fixed group w-sidebar-collapsed hover:w-sidebar-expanded transition-all duration-300">
      <SidebarContent>
        <div className="px-4 py-4">
          <h1 className="text-xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">ERP System</h1>
          <div className="text-xl font-bold text-white opacity-100 group-hover:opacity-0 absolute top-4 left-4 transition-opacity duration-300">
            ERP
          </div>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`
                      ${location.pathname === item.path ? "bg-blue-600 text-white" : "hover:bg-gray-800"}
                      transition-all duration-300
                      overflow-hidden
                    `}
                  >
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 min-w-5" />
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                  {item.subItems && (
                    <SidebarMenuSub>
                      {item.subItems.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={location.pathname === subItem.path}
                          >
                            <Link to={subItem.path}>{subItem.title}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
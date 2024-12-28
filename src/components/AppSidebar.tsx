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
  Bell,
  Inbox,
  Building2,
  Truck,
  BarChart3,
  Factory,
  Warehouse,
  ClipboardList
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
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Finance",
    path: "/finance",
    icon: DollarSign,
  },
  {
    title: "HR",
    path: "/hr",
    icon: Users,
  },
  {
    title: "Sales",
    path: "/sales",
    icon: ShoppingCart,
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: Warehouse,
  },
  {
    title: "Manufacturing",
    path: "/manufacturing",
    icon: Factory,
  },
  {
    title: "Supply Chain",
    path: "/supply-chain",
    icon: Truck,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Quality Control",
    path: "/quality",
    icon: ClipboardList,
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
        path: "/messages/inbox",
      },
      {
        title: "Sent",
        path: "/messages/sent",
      },
    ],
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
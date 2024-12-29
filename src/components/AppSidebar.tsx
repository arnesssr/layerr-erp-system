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
import { menuItems } from "./sidebar/SidebarMenuItems";

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="fixed group w-[52px] hover:w-64 transition-all duration-300 ease-in-out z-50">
      <SidebarContent className="h-full overflow-y-auto scrollbar-thin">
        <div className="px-4 py-4">
          <h1 className="text-xl font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            ERP System
          </h1>
          <div className="text-xl font-bold text-primary opacity-100 group-hover:opacity-0 absolute top-4 left-4 transition-opacity duration-300">
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
                      ${location.pathname === item.path ? "bg-primary text-primary-foreground" : "hover:bg-muted"}
                      transition-all duration-300
                      overflow-hidden
                      relative
                      w-full
                      flex
                      items-center
                      px-3
                      py-2
                      rounded-md
                      group
                    `}
                  >
                    <Link to={item.path} className="flex items-center gap-3 w-full">
                      <item.icon className="h-5 w-5 min-w-5 flex-shrink-0" />
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap truncate">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                  {item.subItems && (
                    <SidebarMenuSub className="ml-4 mt-1">
                      {item.subItems.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            className={`
                              ${location.pathname === subItem.path ? "bg-primary/50 text-primary-foreground" : "hover:bg-muted"}
                              transition-all
                              duration-300
                              opacity-0
                              group-hover:opacity-100
                              rounded-md
                              py-1.5
                              px-3
                              text-sm
                              w-full
                              flex
                              items-center
                              whitespace-nowrap
                            `}
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
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
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AppSidebar() {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (menuTitle: string) => {
    setOpenMenus(prev => 
      prev.includes(menuTitle) 
        ? prev.filter(title => title !== menuTitle)
        : [...prev, menuTitle]
    );
  };

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
                  {item.subItems ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          onClick={() => toggleMenu(item.title)}
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
                          <item.icon className="h-5 w-5 min-w-5 flex-shrink-0" />
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap truncate ml-3">
                            {item.title}
                          </span>
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        className="w-48 bg-popover" 
                        align="start"
                        side="right"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm hover:bg-muted"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
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
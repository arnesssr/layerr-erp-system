import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { menuItems } from "./SidebarMenuItems";
import { ChevronRight } from "lucide-react";

export function IconBar() {
  const { toggleSidebar } = useSidebar();

  return (
    <div 
      className="fixed left-0 top-0 h-full w-[52px] bg-background border-r z-50 flex flex-col items-center py-4 gap-2"
      onMouseEnter={toggleSidebar}
    >
      {menuItems.map((item) => (
        <div 
          key={item.title}
          className="relative w-10 h-10 flex items-center justify-center rounded-md hover:bg-accent cursor-pointer group"
          title={item.title} // Add tooltip on hover
        >
          <item.icon className="h-5 w-5" />
          {item.subItems && (
            <ChevronRight className="h-4 w-4 absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" />
          )}
        </div>
      ))}
    </div>
  );
}
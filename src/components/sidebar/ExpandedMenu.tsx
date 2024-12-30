import { useSidebar } from "@/components/ui/sidebar";
import { menuItems } from "./SidebarMenuItems";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ExpandedMenu() {
  const { state } = useSidebar();

  return (
    <div 
      className={cn(
        "fixed left-[52px] top-0 h-full bg-background border-r z-40 transition-all duration-300 ease-in-out overflow-hidden",
        state === "expanded" ? "w-[200px] opacity-100" : "w-0 opacity-0"
      )}
      onMouseLeave={() => {
        const sidebar = document.querySelector("[data-state='expanded']");
        if (sidebar) {
          const event = new MouseEvent("mouseleave", {
            bubbles: true,
            cancelable: true,
          });
          sidebar.dispatchEvent(event);
        }
      }}
    >
      <div className="py-4 px-2">
        {menuItems.map((item) => (
          <div key={item.title} className="mb-1 relative">
            {item.subItems ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full">
                  <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-accent cursor-pointer">
                    <span className="pl-7">{item.title}</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-[200px] -ml-2 mt-0" 
                  align="start"
                  alignOffset={0}
                  sideOffset={0}
                >
                  {item.subItems.map((subItem) => (
                    <a
                      key={subItem.title}
                      href={subItem.path}
                      className="block px-4 py-2 text-sm hover:bg-accent rounded-sm"
                    >
                      {subItem.title}
                    </a>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                href={item.path}
                className="flex items-center w-full px-3 py-2 rounded-md hover:bg-accent"
              >
                <span className="pl-7">{item.title}</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
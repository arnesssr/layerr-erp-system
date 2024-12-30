import { useSidebar } from "@/components/ui/sidebar";
import { menuItems } from "./SidebarMenuItems";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function ExpandedMenu() {
  // State to track which menu is expanded
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const { state } = useSidebar();

  // Handle menu click
  const handleMenuClick = (menuTitle: string) => {
    setExpandedMenu(expandedMenu === menuTitle ? null : menuTitle);
  };

  // Handle mouse leave for the entire menu
  const handleMouseLeave = () => {
    setExpandedMenu(null);
    const sidebar = document.querySelector("[data-state='expanded']");
    if (sidebar) {
      const event = new MouseEvent("mouseleave", {
        bubbles: true,
        cancelable: true,
      });
      sidebar.dispatchEvent(event);
    }
  };

  return (
    <div 
      className={cn(
        "fixed left-[52px] top-0 h-full bg-background border-r z-40 transition-all duration-300 ease-in-out overflow-hidden",
        state === "expanded" ? "w-[200px] opacity-100" : "w-0 opacity-0"
      )}
      onMouseLeave={handleMouseLeave}
    >
      <div className="py-4 px-2">
        {menuItems.map((item) => (
          <div key={item.title} className="mb-1 relative">
            <button
              onClick={() => handleMenuClick(item.title)}
              className={cn(
                "flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-accent cursor-pointer",
                expandedMenu === item.title && "bg-accent"
              )}
            >
              <span className="pl-7">{item.title}</span>
              {item.subItems && (
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform",
                  expandedMenu === item.title && "transform rotate-180"
                )} />
              )}
            </button>
            {/* Submenu items */}
            {item.subItems && expandedMenu === item.title && (
              <div className="pl-10 py-1 bg-accent/50 rounded-md mt-1">
                {item.subItems.map((subItem) => (
                  <a
                    key={subItem.title}
                    href={subItem.path}
                    className="block px-2 py-1.5 text-sm hover:bg-accent rounded-sm"
                  >
                    {subItem.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
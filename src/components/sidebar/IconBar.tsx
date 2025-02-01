import { cn } from "@/lib/utils";
import { menuItems } from "./SidebarMenuItems";
import { Link, useLocation } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function IconBar() {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 h-full w-[52px] bg-background border-r z-50 flex flex-col items-center py-4">
      <div className="h-full overflow-y-auto scrollbar-thin">
        <TooltipProvider>
          {menuItems.map((item) => (
            <Tooltip key={item.title}>
              <TooltipTrigger asChild>
                <Link
                  to={item.path}
                  className={cn(
                    "relative w-10 h-10 flex items-center justify-center rounded-md hover:bg-accent cursor-pointer group mb-2",
                    location.pathname === item.path && "bg-accent"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.title}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
}
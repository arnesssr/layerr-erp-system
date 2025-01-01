import { cn } from "@/lib/utils";
import { menuItems } from "./SidebarMenuItems";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function IconBar() {
  return (
    <div className="fixed left-0 top-0 h-full w-[52px] bg-background border-r z-50 flex flex-col items-center py-4 gap-2">
      <TooltipProvider>
        {menuItems.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                to={item.path}
                className="relative w-10 h-10 flex items-center justify-center rounded-md hover:bg-accent cursor-pointer group"
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
  );
}
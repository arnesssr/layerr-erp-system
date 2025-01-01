import { cn } from "@/lib/utils";
import { menuItems } from "./SidebarMenuItems";
import { Link } from "react-router-dom";

export function IconBar() {
  return (
    <div className="fixed left-0 top-0 h-full w-[52px] bg-background border-r z-50 flex flex-col items-center py-4 gap-2">
      {menuItems.map((item) => (
        <Link
          key={item.title}
          to={item.path}
          className="relative w-10 h-10 flex items-center justify-center rounded-md hover:bg-accent cursor-pointer group"
          title={item.title}
        >
          <item.icon className="h-5 w-5" />
        </Link>
      ))}
    </div>
  );
}
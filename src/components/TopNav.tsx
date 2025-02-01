import { Bell, MessageSquare, Moon, Sun, User, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "./ThemeProvider";
import { useToast } from "./ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";

export function TopNav() {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    toast({
      title: "No new notifications",
      description: "You're all caught up!",
    });
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  return (
    <div className="flex items-center gap-4 p-4">
      <div className="flex-1" />
      <Link to="/messages">
        <Button
          variant="ghost"
          size="icon"
          className="relative"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-500 text-[10px] font-bold text-white flex items-center justify-center">
            3
          </span>
        </Button>
      </Link>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleNotificationClick}
        className="relative"
      >
        <Bell className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center">
          2
        </span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/settings">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
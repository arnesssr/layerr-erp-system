import React from 'react';
import { Home, Package, Users, Settings, Sun, Moon, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '../theme/ThemeProvider';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-card">
        <div className="p-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">Layr ERP</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
        <nav className="space-y-1 px-4">
          <NavItem icon={<Home className="h-5 w-5" />} label="Dashboard" href="/" />
          <NavItem icon={<Package className="h-5 w-5" />} label="Inventory" href="/inventory" active />
          <NavItem icon={<BarChart2 className="h-5 w-5" />} label="Reports" href="/reports" />
          <NavItem icon={<Users className="h-5 w-5" />} label="Users" href="/users" />
          <NavItem icon={<Settings className="h-5 w-5" />} label="Settings" href="/settings" />
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <header className="h-16 border-b bg-card/50 flex items-center justify-between px-6">
          <h2 className="text-lg font-semibold">Inventory Management System</h2>
          <div className="flex items-center space-x-4">
            {/* Add additional header content here */}
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}> = ({ icon, label, href, active }) => (
  <a
    href={href}
    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors
      ${active 
        ? 'bg-primary/10 text-primary' 
        : 'hover:bg-muted text-muted-foreground hover:text-foreground'
      }`}
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default MainLayout;

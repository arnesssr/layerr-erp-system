import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { TopNav } from "./TopNav";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <main className="flex-1 p-4 md:p-6 transition-all duration-300 pl-[calc(var(--sidebar-width-icon)+1rem)] group-hover/sidebar-wrapper:pl-[calc(var(--sidebar-width)+1rem)]">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
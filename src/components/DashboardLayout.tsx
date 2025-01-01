import { AppSidebar } from "./AppSidebar";
import { TopNav } from "./TopNav";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 p-4 md:p-6 ml-[52px]">
          {children}
        </main>
      </div>
    </div>
  );
}
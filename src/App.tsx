import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider } from "./components/auth/AuthContext";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Calendar from "./pages/Calendar";
import Documents from "./pages/Documents";
import Messages from "./pages/Messages";

// Financial Management
import Finance from "./pages/finance/Finance";
import AccountsPayable from "./pages/finance/AccountsPayable";
import AccountsReceivable from "./pages/finance/AccountsReceivable";
import GeneralLedger from "./pages/finance/GeneralLedger";
import Budgeting from "./pages/finance/Budgeting";
import TaxManagement from "./pages/finance/TaxManagement";

import SupplyChain from "./pages/supply-chain/SupplyChain";
import Inventory from "./pages/supply-chain/Inventory";
import Procurement from "./pages/supply-chain/Procurement";
import Orders from "./pages/supply-chain/Orders";
import Warehouse from "./pages/supply-chain/Warehouse";

// Human Resources
import HR from "./pages/hr/HR";
import Payroll from "./pages/hr/Payroll";
import Employees from "./pages/hr/Employees";
import Recruitment from "./pages/hr/Recruitment";
import Performance from "./pages/hr/Performance";

// CRM
import CRM from "./pages/crm/CRM";
import SalesAutomation from "./pages/crm/SalesAutomation";
import CustomerService from "./pages/crm/CustomerService";
import SalesForce from "./pages/crm/SalesForce";

// Manufacturing
import Manufacturing from "./pages/manufacturing/Manufacturing";
import Production from "./pages/manufacturing/Production";
import QualityControl from "./pages/manufacturing/QualityControl";
import BOM from "./pages/manufacturing/BOM";

// Project Management
import Projects from "./pages/projects/Projects";
import Resources from "./pages/projects/Resources";
import TimeTracking from "./pages/projects/TimeTracking";
import ProjectAccounting from "./pages/projects/ProjectAccounting";

// Analytics
import Analytics from "./pages/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Dashboard Routes */}
              <Route element={<DashboardLayout><Outlet /></DashboardLayout>}>
                <Route index element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/messages/*" element={<Messages />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/inventory" element={<Inventory />} />

                {/* Financial Management Routes */}
                <Route path="/finance" element={<Finance />} />
                <Route path="/finance/payable" element={<AccountsPayable />} />
                <Route path="/finance/receivable" element={<AccountsReceivable />} />
                <Route path="/finance/ledger" element={<GeneralLedger />} />
                <Route path="/finance/budgeting" element={<Budgeting />} />
                <Route path="/finance/tax" element={<TaxManagement />} />

                {/* Supply Chain Routes */}
                <Route path="/supply-chain" element={<SupplyChain />} />
                <Route path="/supply-chain/inventory" element={<Inventory />} />
                <Route path="/supply-chain/procurement" element={<Procurement />} />
                <Route path="/supply-chain/orders" element={<Orders />} />
                <Route path="/supply-chain/warehouse" element={<Warehouse />} />

                {/* HR Routes */}
                <Route path="/hr" element={<HR />} />
                <Route path="/hr/payroll" element={<Payroll />} />
                <Route path="/hr/employees" element={<Employees />} />
                <Route path="/hr/recruitment" element={<Recruitment />} />
                <Route path="/hr/performance" element={<Performance />} />

                {/* CRM Routes */}
                <Route path="/crm" element={<CRM />} />
                <Route path="/crm/sales-automation" element={<SalesAutomation />} />
                <Route path="/crm/customer-service" element={<CustomerService />} />
                <Route path="/crm/sales-force" element={<SalesForce />} />

                {/* Manufacturing Routes */}
                <Route path="/manufacturing" element={<Manufacturing />} />
                <Route path="/manufacturing/production" element={<Production />} />
                <Route path="/manufacturing/quality" element={<QualityControl />} />
                <Route path="/manufacturing/bom" element={<BOM />} />

                {/* Project Management Routes */}
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/resources" element={<Resources />} />
                <Route path="/projects/time" element={<TimeTracking />} />
                <Route path="/projects/accounting" element={<ProjectAccounting />} />
              </Route>
              
              {/* Redirect all other routes to dashboard */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
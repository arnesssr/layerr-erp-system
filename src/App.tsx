import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { DashboardLayout } from "./components/DashboardLayout";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider, useAuth } from "./components/auth/AuthContext";

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

// Supply Chain Management
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

// Protected Route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  
  return isAuthenticated ? children : null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Dashboard Layout Routes */}
              <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
              <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
              <Route path="/calendar" element={<DashboardLayout><Calendar /></DashboardLayout>} />
              <Route path="/documents" element={<DashboardLayout><Documents /></DashboardLayout>} />
              <Route path="/messages/*" element={<DashboardLayout><Messages /></DashboardLayout>} />
              <Route path="/analytics" element={<DashboardLayout><Analytics /></DashboardLayout>} />

              {/* Protected Routes - Financial Management */}
              <Route path="/finance" element={
                <ProtectedRoute>
                  <DashboardLayout><Finance /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/finance/payable" element={
                <ProtectedRoute>
                  <DashboardLayout><AccountsPayable /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/finance/receivable" element={
                <ProtectedRoute>
                  <DashboardLayout><AccountsReceivable /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/finance/ledger" element={
                <ProtectedRoute>
                  <DashboardLayout><GeneralLedger /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/finance/budgeting" element={
                <ProtectedRoute>
                  <DashboardLayout><Budgeting /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/finance/tax" element={
                <ProtectedRoute>
                  <DashboardLayout><TaxManagement /></DashboardLayout>
                </ProtectedRoute>
              } />

              {/* Protected Routes - Supply Chain */}
              <Route path="/supply-chain" element={
                <ProtectedRoute>
                  <DashboardLayout><SupplyChain /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/supply-chain/inventory" element={
                <ProtectedRoute>
                  <DashboardLayout><Inventory /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/supply-chain/procurement" element={
                <ProtectedRoute>
                  <DashboardLayout><Procurement /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/supply-chain/orders" element={
                <ProtectedRoute>
                  <DashboardLayout><Orders /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/supply-chain/warehouse" element={
                <ProtectedRoute>
                  <DashboardLayout><Warehouse /></DashboardLayout>
                </ProtectedRoute>
              } />

              {/* Protected Routes - HR */}
              <Route path="/hr" element={
                <ProtectedRoute>
                  <DashboardLayout><HR /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/hr/payroll" element={
                <ProtectedRoute>
                  <DashboardLayout><Payroll /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/hr/employees" element={
                <ProtectedRoute>
                  <DashboardLayout><Employees /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/hr/recruitment" element={
                <ProtectedRoute>
                  <DashboardLayout><Recruitment /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/hr/performance" element={
                <ProtectedRoute>
                  <DashboardLayout><Performance /></DashboardLayout>
                </ProtectedRoute>
              } />

              {/* Protected Routes - CRM */}
              <Route path="/crm" element={
                <ProtectedRoute>
                  <DashboardLayout><CRM /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/crm/sales-automation" element={
                <ProtectedRoute>
                  <DashboardLayout><SalesAutomation /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/crm/customer-service" element={
                <ProtectedRoute>
                  <DashboardLayout><CustomerService /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/crm/sales-force" element={
                <ProtectedRoute>
                  <DashboardLayout><SalesForce /></DashboardLayout>
                </ProtectedRoute>
              } />

              {/* Protected Routes - Manufacturing */}
              <Route path="/manufacturing" element={
                <ProtectedRoute>
                  <DashboardLayout><Manufacturing /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/manufacturing/production" element={
                <ProtectedRoute>
                  <DashboardLayout><Production /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/manufacturing/quality" element={
                <ProtectedRoute>
                  <DashboardLayout><QualityControl /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/manufacturing/bom" element={
                <ProtectedRoute>
                  <DashboardLayout><BOM /></DashboardLayout>
                </ProtectedRoute>
              } />

              {/* Protected Routes - Project Management */}
              <Route path="/projects" element={
                <ProtectedRoute>
                  <DashboardLayout><Projects /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/projects/resources" element={
                <ProtectedRoute>
                  <DashboardLayout><Resources /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/projects/time" element={
                <ProtectedRoute>
                  <DashboardLayout><TimeTracking /></DashboardLayout>
                </ProtectedRoute>
              } />
              <Route path="/projects/accounting" element={
                <ProtectedRoute>
                  <DashboardLayout><ProjectAccounting /></DashboardLayout>
                </ProtectedRoute>
              } />

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
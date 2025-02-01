import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  Barcode, 
  BoxesIcon, 
  ShoppingCart, 
  Warehouse, 
  ShoppingBag, 
  RotateCcw, 
  BarChart, 
  Plug 
} from "lucide-react";

const features = [
  { 
    title: "Dashboard", 
    icon: LayoutDashboard,
    details: [
      "Stock levels (categorized: raw materials, finished goods, etc.)",
      "Critical stock alerts (low stock, overstock, expiring items)",
      "Incoming & outgoing shipments",
      "Demand forecasting (AI-powered trends)",
      "Real-time stock valuation"
    ]
  },
  { 
    title: "Product & SKU Management", 
    icon: Barcode,
    details: [
      "Add, update, and manage products with unique SKUs",
      "Barcode & QR code generation/scanning",
      "Batch & serial number tracking",
      "Configurable product attributes (size, color, weight, etc.)",
      "Supplier-linked product details"
    ]
  },
  { 
    title: "Stock Operations", 
    icon: BoxesIcon,
    details: [
      "Stock In / Stock Out (real-time tracking)",
      "Automated stock reconciliation",
      "Transfer stock between warehouses",
      "Multi-location stock tracking",
      "Expiry date & batch-wise inventory movement"
    ]
  },
  { 
    title: "Purchase & Supplier Management", 
    icon: ShoppingCart,
    details: [
      "Automated reordering based on min stock levels",
      "Purchase order (PO) generation & tracking",
      "Supplier performance tracking",
      "Vendor price comparison"
    ]
  },
  { 
    title: "Warehouse & Storage", 
    icon: Warehouse,
    details: [
      "Multi-warehouse support",
      "Rack/bin management",
      "Smart storage suggestions (AI-driven slotting)",
      "FIFO, LIFO, FEFO stock rotation policies"
    ]
  },
  { 
    title: "Sales & Order Fulfillment", 
    icon: ShoppingBag,
    details: [
      "Real-time stock deduction on order placement",
      "Backorder & pre-order handling",
      "Integration with e-commerce platforms",
      "Reservation-based stock allocation"
    ]
  },
  { 
    title: "Returns & Adjustments", 
    icon: RotateCcw,
    details: [
      "Defective stock tracking",
      "Stock recall and quarantine management",
      "Audit trails & approval workflow"
    ]
  },
  { 
    title: "Reports & Analytics", 
    icon: BarChart,
    details: [
      "AI-driven demand forecasting",
      "Stock aging & turnover analysis",
      "Profitability analysis per SKU",
      "Automated compliance & regulatory reports"
    ]
  },
  { 
    title: "Integrations & Automation", 
    icon: Plug,
    details: [
      "REST API & Webhooks for external integrations",
      "IoT-enabled tracking (RFID, NFC)",
      "AI-powered auto-replenishment",
      "Accounting & finance module linkage"
    ]
  }
];

const InventoryFeatures = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Inventory Management System</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Icon className="h-6 w-6 mr-2 text-primary" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2 text-sm text-muted-foreground">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="leading-relaxed">{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default InventoryFeatures;
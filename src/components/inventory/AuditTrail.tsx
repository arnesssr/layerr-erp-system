import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  PackageCheck, 
  PackageMinus, 
  UserCheck, 
  Edit, 
  AlertTriangle 
} from "lucide-react";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  Download, Filter, Calendar as CalendarIcon, Users, Tag, 
  Package
} from "lucide-react";
import { format } from "date-fns";
import { hasPermission, PERMISSIONS } from "@/lib/utils";

const auditLogs = [
  {
    id: 1,
    type: "stock_update",
    action: "Stock received",
    item: "Office Chair",
    sku: "FURN-001",
    quantity: 25,
    timestamp: "2024-01-15 09:30:22",
    user: {
      name: "John Smith",
      role: "Inventory Manager",
      avatar: "/avatars/john.png"
    },
    details: "Purchase Order: PO-2024-001"
  },
  {
    id: 2,
    type: "adjustment",
    action: "Manual adjustment",
    item: "Desk Lamp",
    sku: "LIGHT-023",
    quantity: -2,
    timestamp: "2024-01-15 10:15:45",
    user: {
      name: "Sarah Wilson",
      role: "Stock Controller",
      avatar: "/avatars/sarah.png"
    },
    details: "Damaged items write-off"
  }
];

export function AuditTrail() {
  const [dateRange, setDateRange] = useState<[Date | undefined, Date | undefined]>([
    undefined,
    undefined
  ]);
  const [filters, setFilters] = useState({
    type: "all",
    user: "all",
    item: "",
  });

  const userRole = "ADMIN"; // This would come from your auth context

  const handleExport = () => {
    const csvContent = convertToCSV(filterLogs(auditLogs));
    downloadCSV(csvContent, `audit-log-${format(new Date(), 'yyyy-MM-dd')}.csv`);
  };

  const filterLogs = (logs: typeof auditLogs) => {
    return logs.filter(log => {
      const matchesType = filters.type === "all" || log.type === filters.type;
      const matchesUser = filters.user === "all" || log.user.name === filters.user;
      const matchesItem = !filters.item || log.item.toLowerCase().includes(filters.item.toLowerCase());
      const matchesDate = dateRange[0] && dateRange[1] ? 
        new Date(log.timestamp) >= dateRange[0] && new Date(log.timestamp) <= dateRange[1] : true;
      
      return matchesType && matchesUser && matchesItem && matchesDate;
    });
  };

  const canExport = hasPermission('ADMIN', PERMISSIONS.EXPORT_AUDIT);
  const canFilter = hasPermission('ADMIN', PERMISSIONS.FILTER_AUDIT);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Audit Trail</CardTitle>
            <div className="flex items-center gap-2">
              {canFilter && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filters
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Date Range</label>
                        <div className="grid grid-cols-2 gap-2">
                          <Calendar
                            selected={dateRange[0]}
                            onSelect={(date) => 
                              setDateRange([date, dateRange[1]])
                            }
                          />
                          <Calendar
                            selected={dateRange[1]}
                            onSelect={(date) => 
                              setDateRange([dateRange[0], date])
                            }
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Event Type</label>
                        <Select
                          value={filters.type}
                          onValueChange={(value) => 
                            setFilters({ ...filters, type: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            <SelectItem value="stock_update">Stock Update</SelectItem>
                            <SelectItem value="adjustment">Adjustment</SelectItem>
                            <SelectItem value="user_action">User Action</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Search Items</label>
                        <Input
                          placeholder="Search by item name or SKU"
                          value={filters.item}
                          onChange={(e) => 
                            setFilters({ ...filters, item: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
              
              {canExport && (
                <Button variant="default" size="sm" onClick={handleExport}>
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Activities</TabsTrigger>
              <TabsTrigger value="stock">Stock Changes</TabsTrigger>
              <TabsTrigger value="user">User Actions</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-4">
                  {filterLogs(auditLogs).map((log) => (
                    <AuditLogCard key={log.id} log={log} />
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

function AuditLogCard({ log }: { log: any }) {
  return (
    <div className="flex items-start space-x-4 rounded-lg border p-4">
      <div className={`rounded-full p-2 ${getActionColor(log.type)}`}>
        {getActionIcon(log.type)}
      </div>
      
      <div className="flex-1 space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-medium">{log.action}</p>
            <p className="text-sm text-muted-foreground">
              {log.item} ({log.sku})
            </p>
          </div>
          <Badge variant={getQuantityVariant(log.quantity)}>
            {log.quantity > 0 ? '+' : ''}{log.quantity} units
          </Badge>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={log.user.avatar} />
              <AvatarFallback>{log.user.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <span className="font-medium">{log.user.name}</span>
              <span className="text-muted-foreground"> • {log.user.role}</span>
            </div>
          </div>
          <span className="text-muted-foreground">{log.timestamp}</span>
        </div>
        
        {log.details && (
          <p className="text-sm text-muted-foreground bg-muted p-2 rounded">
            {log.details}
          </p>
        )}
      </div>
    </div>
  );
}

function getActionIcon(type: string) {
  switch (type) {
    case 'stock_update':
      return <PackageCheck className="h-4 w-4" />;
    case 'adjustment':
      return <Edit className="h-4 w-4" />;
    case 'user_action':
      return <UserCheck className="h-4 w-4" />;
    default:
      return <AlertTriangle className="h-4 w-4" />;
  }
}

function getActionColor(type: string) {
  switch (type) {
    case 'stock_update':
      return 'bg-green-500/20 text-green-500';
    case 'adjustment':
      return 'bg-blue-500/20 text-blue-500';
    case 'user_action':
      return 'bg-purple-500/20 text-purple-500';
    default:
      return 'bg-yellow-500/20 text-yellow-500';
  }
}

function getQuantityVariant(quantity: number): "default" | "destructive" | "outline" {
  if (quantity > 0) return "default";
  if (quantity < 0) return "destructive";
  return "outline";
}

function convertToCSV(logs: typeof auditLogs) {
  const headers = ['Timestamp', 'Type', 'Action', 'Item', 'User', 'Details'];
  const rows = logs.map(log => [
    log.timestamp,
    log.type,
    log.action,
    log.item,
    log.user.name,
    log.details
  ]);
  
  return [headers, ...rows]
    .map(row => row.join(','))
    .join('\n');
}

function downloadCSV(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

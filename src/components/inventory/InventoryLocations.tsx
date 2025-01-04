import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Package2 } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Main Warehouse",
    code: "WH-001",
    address: "123 Logistics Way",
    capacity: 80,
    items: 234,
    status: "Active"
  },
  {
    id: 2,
    name: "East Wing Storage",
    code: "WH-002",
    address: "456 Storage Road",
    capacity: 45,
    items: 123,
    status: "Active"
  }
];

export function InventoryLocations() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {locations.map((location) => (
        <Card key={location.id} className="relative overflow-hidden">
          <div className="absolute right-2 top-2">
            <Badge variant={location.status === "Active" ? "default" : "secondary"}>
              {location.status}
            </Badge>
          </div>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{location.name}</span>
            </CardTitle>
            <p className="text-sm text-muted-foreground">{location.address}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Package2 className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{location.items} Items</span>
                </div>
                <span className="text-sm text-muted-foreground">Code: {location.code}</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Capacity Usage</span>
                  <span className="font-medium">{location.capacity}%</span>
                </div>
                <Progress value={location.capacity} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

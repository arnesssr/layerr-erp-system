import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { Package2, AlertTriangle, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { UoMSelector } from "./UoMSelector";
import { formatQuantity } from "@/lib/utils/uom";

interface InventoryListProps {
  searchQuery: string;
}

const inventoryData = [
  {
    id: "INV001",
    name: "Office Chair",
    sku: "FURN-001",
    category: "Furniture",
    supplier: "Office Solutions",
    baseUnit: "pc",
    variants: [
      { id: 1, size: "Large", color: "Black", quantity: 25, unit: "pc" },
      { id: 2, size: "Medium", color: "Black", quantity: 30, unit: "pc" },
      { id: 3, size: "Large", color: "Black", quantity: 2, unit: "box" }
    ],
    lastUpdated: "2024-01-02"
  },
];

export function InventoryList({ searchQuery }: InventoryListProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredItems = inventoryData.filter(item => 
    searchQuery
      ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Inventory Items</CardTitle>
          <Badge variant="secondary" className="flex items-center">
            <Package2 className="mr-1 h-4 w-4" />
            {filteredItems.length} Items
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Total Quantity</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((item) => (
              <>
                <TableRow 
                  key={item.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => toggleExpand(item.id)}
                >
                  <TableCell>
                    {item.variants.length > 0 && (
                      expandedItems.includes(item.id) 
                        ? <ChevronDown className="h-4 w-4" />
                        : <ChevronRight className="h-4 w-4" />
                    )}
                  </TableCell>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.supplier}</TableCell>
                  <TableCell>
                    {item.variants.reduce((sum, variant) => sum + variant.quantity, 0)}
                  </TableCell>
                  <TableCell>{item.lastUpdated}</TableCell>
                </TableRow>
                {expandedItems.includes(item.id) && item.variants.map(variant => (
                  <TableRow key={variant.id} className="bg-muted/50">
                    <TableCell></TableCell>
                    <TableCell colSpan={2}>
                      <div className="flex gap-2">
                        {Object.entries(variant)
                          .filter(([key]) => !['id', 'quantity'].includes(key))
                          .map(([key, value], i) => (
                            <Badge key={i} variant="outline">
                              {value}
                            </Badge>
                          ))}
                      </div>
                    </TableCell>
                    <TableCell colSpan={3}></TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        {variant.quantity} in stock
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <UoMSelector
                        value={variant.unit}
                        onChange={(newUnit) => {
                          console.log('Unit changed:', newUnit);
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        {formatQuantity(variant.quantity, variant.unit)}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
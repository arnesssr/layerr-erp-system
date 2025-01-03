import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Tag, Box, Layers } from "lucide-react";

const categories = {
  types: [
    { name: "Electronics", count: 145, value: 400, color: "#0ea5e9" },
    { name: "Furniture", count: 89, value: 300, color: "#8b5cf6" },
    { name: "Office Supplies", count: 234, value: 200, color: "#22c55e" },
    { name: "Storage", count: 56, value: 150, color: "#f59e0b" }
  ],
  suppliers: [
    { name: "TechCorp Inc", count: 89, value: 250, color: "#06b6d4" },
    { name: "Office Solutions", count: 167, value: 350, color: "#f43f5e" },
    { name: "Global Supplies", count: 145, value: 300, color: "#a855f7" }
  ]
};

const variants = [
  {
    productName: "Office Chair",
    sku: "FURN-001",
    variants: [
      { size: "Large", color: "Black", inStock: 25 },
      { size: "Medium", color: "Black", inStock: 30 },
      { size: "Large", color: "Gray", inStock: 15 }
    ]
  },
  {
    productName: "Desk Lamp",
    sku: "LIGHT-023",
    variants: [
      { color: "White", wattage: "10W", inStock: 45 },
      { color: "Black", wattage: "10W", inStock: 38 }
    ]
  }
];

export function ProductCategories() {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              Categories
            </CardTitle>
            <Badge variant="outline">{categories.types.length} Categories</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="chart" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="chart">Chart View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>
            <TabsContent value="chart">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categories.types}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                    >
                      {categories.types.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="list">
              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {categories.types.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-muted rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: category.color }} />
                        <span>{category.name}</span>
                      </div>
                      <Badge variant="outline">{category.count} items</Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-4 w-4" />
              Product Variants
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            <div className="space-y-6">
              {variants.map((product, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{product.productName}</h4>
                      <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
                    </div>
                    <Badge variant="outline" className="font-mono">
                      {product.variants.length} variants
                    </Badge>
                  </div>
                  <div className="grid gap-2">
                    {product.variants.map((variant, vIndex) => (
                      <div
                        key={vIndex}
                        className="flex items-center justify-between rounded-lg border p-2 text-sm"
                      >
                        <div className="flex gap-2">
                          {Object.entries(variant).map(([key, value], i) => (
                            key !== 'inStock' && (
                              <Badge key={i} variant="secondary">
                                {value}
                              </Badge>
                            )
                          ))}
                        </div>
                        <Badge variant="outline">
                          {variant.inStock} in stock
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}

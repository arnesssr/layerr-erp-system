import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface InventoryItem {
  id: string
  name: string
  sku: string
  quantity: number
  price: number
  status: 'in-stock' | 'low-stock' | 'out-of-stock'
}

interface InventoryListProps {
  items?: InventoryItem[]
}

// Add sample data
const sampleItems: InventoryItem[] = [
  { id: '1', name: 'Product A', sku: 'SKU001', quantity: 100, price: 29.99, status: 'in-stock' },
  { id: '2', name: 'Product B', sku: 'SKU002', quantity: 5, price: 49.99, status: 'low-stock' },
  { id: '3', name: 'Product C', sku: 'SKU003', quantity: 0, price: 19.99, status: 'out-of-stock' },
];

const InventoryList: React.FC<InventoryListProps> = ({ items = sampleItems }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>SKU</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.sku}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell className={item.quantity === 0 ? 'text-red-500' : 
                                 item.quantity < 10 ? 'text-yellow-500' : 'text-green-500'}>
                {item.quantity}
              </TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>
                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium
                  ${item.status === 'in-stock' ? 'bg-green-100 text-green-700' :
                    item.status === 'low-stock' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'}`}>
                  {item.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default InventoryList

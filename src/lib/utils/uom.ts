export type UnitType = 'weight' | 'volume' | 'length' | 'unit' | 'package';

export interface UnitOfMeasure {
  id: string;
  name: string;
  symbol: string;
  type: UnitType;
  baseUnit: boolean;
  conversionRate: number;
}

export const UOM_UNITS: Record<string, UnitOfMeasure> = {
  // Weight units
  'kg': { id: 'kg', name: 'Kilogram', symbol: 'kg', type: 'weight', baseUnit: true, conversionRate: 1 },
  'g': { id: 'g', name: 'Gram', symbol: 'g', type: 'weight', baseUnit: false, conversionRate: 0.001 },
  
  // Volume units
  'l': { id: 'l', name: 'Liter', symbol: 'L', type: 'volume', baseUnit: true, conversionRate: 1 },
  'ml': { id: 'ml', name: 'Milliliter', symbol: 'mL', type: 'volume', baseUnit: false, conversionRate: 0.001 },
  
  // Package units
  'pc': { id: 'pc', name: 'Piece', symbol: 'pc', type: 'unit', baseUnit: true, conversionRate: 1 },
  'box': { id: 'box', name: 'Box', symbol: 'box', type: 'package', baseUnit: false, conversionRate: 24 },
  'carton': { id: 'ctn', name: 'Carton', symbol: 'ctn', type: 'package', baseUnit: false, conversionRate: 48 }
};

export function convertUnits(value: number, fromUnit: string, toUnit: string): number {
  const from = UOM_UNITS[fromUnit];
  const to = UOM_UNITS[toUnit];
  
  if (!from || !to) throw new Error('Invalid unit');
  if (from.type !== to.type) throw new Error('Cannot convert between different unit types');
  
  return value * (from.conversionRate / to.conversionRate);
}

export function formatQuantity(value: number, unit: string): string {
  const uom = UOM_UNITS[unit];
  return `${value} ${uom?.symbol || unit}`;
}

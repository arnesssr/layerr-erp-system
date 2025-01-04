export interface BatchItem {
  date: string;
  quantity: number;
  cost: number;
  remaining?: number;
}

export interface ValuationResult {
  totalQuantity: number;
  totalValue: number;
  averageCost: number;
  details: {
    date: string;
    quantity: number;
    unitCost: number;
    total: number;
    method: string;
  }[];
}

export function calculateFIFO(batches: BatchItem[]): ValuationResult {
  const sortedBatches = [...batches].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  const details = sortedBatches.map(batch => ({
    date: batch.date,
    quantity: batch.quantity,
    unitCost: batch.cost,
    total: batch.quantity * batch.cost,
    method: 'FIFO'
  }));

  const totalQuantity = sortedBatches.reduce((sum, batch) => sum + batch.quantity, 0);
  const totalValue = sortedBatches.reduce((sum, batch) => sum + (batch.quantity * batch.cost), 0);

  return {
    totalQuantity,
    totalValue,
    averageCost: totalValue / totalQuantity,
    details
  };
}

export function calculateLIFO(batches: BatchItem[]): ValuationResult {
  const sortedBatches = [...batches].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const details = sortedBatches.map(batch => ({
    date: batch.date,
    quantity: batch.quantity,
    unitCost: batch.cost,
    total: batch.quantity * batch.cost,
    method: 'LIFO'
  }));

  const totalQuantity = sortedBatches.reduce((sum, batch) => sum + batch.quantity, 0);
  const totalValue = sortedBatches.reduce((sum, batch) => sum + (batch.quantity * batch.cost), 0);

  return {
    totalQuantity,
    totalValue,
    averageCost: totalValue / totalQuantity,
    details
  };
}

export function calculateWeightedAverage(batches: BatchItem[]): ValuationResult {
  const totalQuantity = batches.reduce((sum, batch) => sum + batch.quantity, 0);
  const totalValue = batches.reduce((sum, batch) => sum + (batch.quantity * batch.cost), 0);
  const weightedAvgCost = totalValue / totalQuantity;

  const details = batches.map(batch => ({
    date: batch.date,
    quantity: batch.quantity,
    unitCost: weightedAvgCost, // All units use the weighted average cost
    total: batch.quantity * weightedAvgCost,
    method: 'Weighted Average'
  }));

  return {
    totalQuantity,
    totalValue,
    averageCost: weightedAvgCost,
    details
  };
}

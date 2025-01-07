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
  console.log('Calculating FIFO valuation for batches:', batches);
  
  const sortedBatches = [...batches].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  const details = sortedBatches.map(batch => {
    const total = batch.quantity * batch.cost;
    console.log(`FIFO batch detail - Date: ${batch.date}, Quantity: ${batch.quantity}, Cost: ${batch.cost}, Total: ${total}`);
    
    return {
      date: batch.date,
      quantity: batch.quantity,
      unitCost: batch.cost,
      total,
      method: 'FIFO'
    };
  });

  const totalQuantity = sortedBatches.reduce((sum, batch) => sum + batch.quantity, 0);
  const totalValue = sortedBatches.reduce((sum, batch) => sum + (batch.quantity * batch.cost), 0);
  const averageCost = totalValue / totalQuantity;

  console.log('FIFO valuation result:', { totalQuantity, totalValue, averageCost });

  return {
    totalQuantity,
    totalValue,
    averageCost,
    details
  };
}

export function calculateLIFO(batches: BatchItem[]): ValuationResult {
  console.log('Calculating LIFO valuation for batches:', batches);
  
  const sortedBatches = [...batches].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const details = sortedBatches.map(batch => {
    const total = batch.quantity * batch.cost;
    console.log(`LIFO batch detail - Date: ${batch.date}, Quantity: ${batch.quantity}, Cost: ${batch.cost}, Total: ${total}`);
    
    return {
      date: batch.date,
      quantity: batch.quantity,
      unitCost: batch.cost,
      total,
      method: 'LIFO'
    };
  });

  const totalQuantity = sortedBatches.reduce((sum, batch) => sum + batch.quantity, 0);
  const totalValue = sortedBatches.reduce((sum, batch) => sum + (batch.quantity * batch.cost), 0);
  const averageCost = totalValue / totalQuantity;

  console.log('LIFO valuation result:', { totalQuantity, totalValue, averageCost });

  return {
    totalQuantity,
    totalValue,
    averageCost,
    details
  };
}

export function calculateWeightedAverage(batches: BatchItem[]): ValuationResult {
  console.log('Calculating Weighted Average valuation for batches:', batches);
  
  const totalQuantity = batches.reduce((sum, batch) => sum + batch.quantity, 0);
  const totalValue = batches.reduce((sum, batch) => sum + (batch.quantity * batch.cost), 0);
  const weightedAvgCost = totalValue / totalQuantity;

  console.log('Weighted Average calculation:', { totalQuantity, totalValue, weightedAvgCost });

  const details = batches.map(batch => {
    const total = batch.quantity * weightedAvgCost;
    console.log(`Weighted Average batch detail - Date: ${batch.date}, Quantity: ${batch.quantity}, AvgCost: ${weightedAvgCost}, Total: ${total}`);
    
    return {
      date: batch.date,
      quantity: batch.quantity,
      unitCost: weightedAvgCost,
      total,
      method: 'Weighted Average'
    };
  });

  return {
    totalQuantity,
    totalValue,
    averageCost: weightedAvgCost,
    details
  };
}
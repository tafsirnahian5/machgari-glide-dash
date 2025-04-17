
import React from 'react';
import { fishStockData } from '@/utils/mockData';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const StockTable = () => {
  const formatPrice = (num: number) => {
    return `$${num.toFixed(2)}`;
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-left">Today's Fish Prices</h3>
        <Button variant="outline" size="sm">View Details</Button>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type of Fish</TableHead>
            <TableHead className="text-right">Price per lb</TableHead>
            <TableHead className="text-right">Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fishStockData.map((stock) => (
            <TableRow key={stock.id}>
              <TableCell className="font-medium">{stock.name}</TableCell>
              <TableCell className="text-right">{formatPrice(stock.price)}</TableCell>
              <TableCell className={`text-right flex items-center justify-end ${
                stock.change > 0 
                  ? 'text-green-600' 
                  : stock.change < 0 
                    ? 'text-red-600' 
                    : ''
              }`}>
                {stock.change > 0 && <ArrowUpIcon className="h-4 w-4 mr-1" />}
                {stock.change < 0 && <ArrowDownIcon className="h-4 w-4 mr-1" />}
                {Math.abs(stock.change).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StockTable;

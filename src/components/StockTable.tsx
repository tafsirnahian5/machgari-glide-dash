
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

const StockTable = () => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  const formatVolume = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short'
    }).format(num);
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  return (
    <div className="overflow-x-auto">
      <h3 className="text-xl font-bold mb-4 text-left">Live Fish Stock Market Data</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Name</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Change</TableHead>
            <TableHead className="text-right">Volume</TableHead>
            <TableHead className="text-right">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fishStockData.map((stock) => (
            <TableRow key={stock.id}>
              <TableCell className="font-medium">{stock.name}</TableCell>
              <TableCell className="text-right">${formatNumber(stock.price)}</TableCell>
              <TableCell className={`text-right flex items-center justify-end ${
                stock.change > 0 
                  ? 'text-green-600' 
                  : stock.change < 0 
                    ? 'text-red-600' 
                    : ''
              }`}>
                {stock.change > 0 && <ArrowUpIcon className="h-4 w-4 mr-1" />}
                {stock.change < 0 && <ArrowDownIcon className="h-4 w-4 mr-1" />}
                {formatNumber(Math.abs(stock.change))}
              </TableCell>
              <TableCell className="text-right">{formatVolume(stock.volume)}</TableCell>
              <TableCell className="text-right">{formatTime(stock.timestamp)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StockTable;


import React from 'react';
import StockTable from './StockTable';
import PriceChart from './PriceChart';
import { Card, CardContent } from '@/components/ui/card';

const Dashboard = () => {
  return (
    <section id="market-dashboard" className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Market Dashboard
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <StockTable />
          </CardContent>
        </Card>
        <div className="h-full">
          <PriceChart />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

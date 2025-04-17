
import React from 'react';
import StockTable from './StockTable';
import PriceChart from './PriceChart';
import { Card, CardContent } from '@/components/ui/card';

const Dashboard = () => {
  return (
    <section id="market-dashboard" className="container mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">
          Market Dashboard
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're committed to making fish market data transparent and accessible to everyone.
          This is part of our initiative with government agencies to promote fair pricing.
        </p>
      </div>
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


import React from 'react';
import StockTable from './StockTable';
import PriceChart from './PriceChart';
import { Card, CardContent } from '@/components/ui/card';
import { Building, TrendingUp } from 'lucide-react';

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

      <div className="mb-8 p-4 bg-machgari-50 dark:bg-machgari-900/20 rounded-lg border border-machgari-100 dark:border-machgari-800">
        <div className="flex items-center gap-3 mb-3">
          <Building className="text-machgari-600 h-5 w-5" />
          <h3 className="font-semibold">Government Transparency Initiative</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          As a new startup working directly with the Department of Fisheries, we're bringing transparency
          to fish markets across the region. Our goal is to ensure fair pricing and equal access to market data
          for all stakeholders in the fishing industry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <StockTable />
          </CardContent>
        </Card>
        <div className="h-full">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Price Trends</h3>
                <div className="flex items-center text-machgari-600">
                  <TrendingUp className="h-5 w-5 mr-1" />
                  <span className="text-sm font-medium">Live Data</span>
                </div>
              </div>
              <PriceChart />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          Data is updated daily. For historical data and detailed analysis, please contact our market research team.
        </p>
      </div>
    </section>
  );
};

export default Dashboard;

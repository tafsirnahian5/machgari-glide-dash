
import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { simplifiedChartData } from '@/utils/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button";

const PriceChart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Fish Price Comparison</CardTitle>
        <Button variant="outline" size="sm">View Trends</Button>
      </CardHeader>
      <CardContent className="chart-animation pt-4">
        {mounted && (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={simplifiedChartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 25,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
              <XAxis dataKey="category" tick={{ fontSize: 12 }} />
              <YAxis
                tickFormatter={(value) => `$${value}`}
                tick={{ fontSize: 12 }}
                domain={[0, 'dataMax + 2']}
              />
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Price per lb']}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  fontSize: "12px",
                }}
              />
              <Bar 
                dataKey="value" 
                fill="hsl(var(--primary))" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default PriceChart;

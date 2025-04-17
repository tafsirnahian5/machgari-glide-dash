
export interface FishStockData {
  id: number;
  name: string;
  price: number;
  change: number;
  volume: number;
  timestamp: string;
}

export interface ChartDataPoint {
  category: string;
  value: number;
}

export const fishStockData: FishStockData[] = [
  {
    id: 1,
    name: "Atlantic Salmon",
    price: 8.75,
    change: 0.25,
    volume: 15420,
    timestamp: "2025-04-17T09:30:00"
  },
  {
    id: 2,
    name: "Tilapia",
    price: 4.20,
    change: -0.15,
    volume: 28750,
    timestamp: "2025-04-17T09:30:00"
  },
  {
    id: 3,
    name: "Sea Bass",
    price: 12.80,
    change: 1.05,
    volume: 5480,
    timestamp: "2025-04-17T09:30:00"
  },
  {
    id: 4,
    name: "Rainbow Trout",
    price: 6.50,
    change: 0.10,
    volume: 9850,
    timestamp: "2025-04-17T09:30:00"
  },
  {
    id: 5,
    name: "Tuna",
    price: 22.45,
    change: -1.20,
    volume: 3200,
    timestamp: "2025-04-17T09:30:00"
  }
];

// Simplified chart data for easier understanding
export const simplifiedChartData: ChartDataPoint[] = [
  { category: "Salmon", value: 8.75 },
  { category: "Tilapia", value: 4.20 },
  { category: "Sea Bass", value: 12.80 },
  { category: "Trout", value: 6.50 },
  { category: "Tuna", value: 22.45 }
];

export const priceChartData: ChartDataPoint[] = [
  { category: "Jan", value: 4000 },
  { category: "Feb", value: 3000 },
  { category: "Mar", value: 5000 },
  { category: "Apr", value: 4780 },
  { category: "May", value: 5890 },
  { category: "Jun", value: 6390 },
  { category: "Jul", value: 6490 },
  { category: "Aug", value: 7490 },
  { category: "Sep", value: 7000 },
  { category: "Oct", value: 7300 },
  { category: "Nov", value: 6890 },
  { category: "Dec", value: 8490 }
];

export const slideData = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1510350160889-4a0d3a8c2dfa?fit=crop&w=1600&h=900&q=80",
    title: "Premium Fishing Fleet",
    description: "Discover our state-of-the-art fishing vessels equipped with the latest technology",
    ctaText: "Explore Fleet",
    ctaLink: "#fleet"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1534275288139-1a8ca10fd9f0?fit=crop&w=1600&h=900&q=80",
    title: "Fresh Seafood Market",
    description: "Direct from our boats to your table - the freshest seafood on the market",
    ctaText: "Visit Market",
    ctaLink: "#market"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?fit=crop&w=1600&h=900&q=80",
    title: "Sustainable Aquaculture",
    description: "Leading the industry in sustainable fishing and farming practices",
    ctaText: "Learn More",
    ctaLink: "#sustainability"
  }
];

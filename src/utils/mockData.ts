
export interface FishStockData {
  id: number;
  name: string;
  price: number;
  change: number;
  volume: number;
  timestamp: string;
}

export interface ChartDataPoint {
  date: string;
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

export const priceChartData: ChartDataPoint[] = [
  { date: "Jan", value: 4000 },
  { date: "Feb", value: 3000 },
  { date: "Mar", value: 5000 },
  { date: "Apr", value: 4780 },
  { date: "May", value: 5890 },
  { date: "Jun", value: 6390 },
  { date: "Jul", value: 6490 },
  { date: "Aug", value: 7490 },
  { date: "Sep", value: 7000 },
  { date: "Oct", value: 7300 },
  { date: "Nov", value: 6890 },
  { date: "Dec", value: 8490 }
];

export const slideData = [
  {
    id: 1,
    imageUrl: "https://source.unsplash.com/1600x900/?fishing,boat",
    title: "Premium Fishing Fleet",
    description: "Discover our state-of-the-art fishing vessels equipped with the latest technology",
    ctaText: "Explore Fleet",
    ctaLink: "#fleet"
  },
  {
    id: 2,
    imageUrl: "https://source.unsplash.com/1600x900/?fish,market",
    title: "Fresh Seafood Market",
    description: "Direct from our boats to your table - the freshest seafood on the market",
    ctaText: "Visit Market",
    ctaLink: "#market"
  },
  {
    id: 3,
    imageUrl: "https://source.unsplash.com/1600x900/?aquaculture,farm",
    title: "Sustainable Aquaculture",
    description: "Leading the industry in sustainable fishing and farming practices",
    ctaText: "Learn More",
    ctaLink: "#sustainability"
  }
];

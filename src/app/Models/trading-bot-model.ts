import { Profit } from './Profit';

export interface TradingBot {
  id: string;
  name: string;
  type: string;
  strategy: string;
  profit: Profit;
  workedTime: string;
  status: string;
  isActive: boolean;
}

export interface CreatedTradingBot {
  name: string;
  sum: number;
  esValue: number;
  goalValue: number;
  strategy: string;
  instrument: string;
  industry: string;
  asset: string;
}

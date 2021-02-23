import { Profit } from './Profit';

// todo добавить поля из Bot
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

export interface Bot {
  createdDate: number;
  isActive: boolean;
  ticker: string;
  broker: string;
  brokerFee: number;
  operations: IOperation[];
}

export interface IOperation {
  createdDate: number;
  price: number;
  lot: number;
  isSuccess: Boolean;
  isLong: Boolean;
  fee: number;
  bot: Bot
}
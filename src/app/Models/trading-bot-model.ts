import { Profit } from './Profit';

// todo добавить поля из Bot
// export interface Bot {
//   id: string;
//   name: string;
//   type: string;
//   strategy: string;
//   profit: Profit;
//   workedTime: string;
//   status: string;
//   isActive: boolean;
// }

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
  id: string;
  ticker: string;
  createdDate: number;
  isActive: boolean;
  broker: string;
  brokerFee: number;
  operations?: IOperation[];

  strategy: string;
  workedTime: string
  profit: string;
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
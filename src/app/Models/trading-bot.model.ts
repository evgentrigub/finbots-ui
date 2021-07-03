import { StrategyList } from "./strategy.model";

/**
 * Модель для создания бота
 */
export interface BotDto {
  ticker: string;
  strategy: StrategyList;
}


export interface TradingBotViewModel {
  name: string;
  sum: number;
  esValue: number;
  goalValue: number;
  strategy: string;
  instrument: string;
  industry: string;
  asset: string;
}

export interface TradingBot {
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
  bot: TradingBot
}
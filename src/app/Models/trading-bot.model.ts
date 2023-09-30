import { StrategyName } from "./strategy.model";

/**
 * Модель для создания бота
 */
export interface BotDto {
  ticker: string;
  isCustomStrategy: boolean,
  strategy: {
    botInterval: number,
    techAnalysisPeriod: number
  },
  strategyName: StrategyName
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
  id: number;
  ticker: string;
  createdDate: number;
  // broker: string;
  // brokerFee: number;

  // strategy: string;
  // profit: string;
  status: CronStatus;

  operations?: IOperation[];
  // workedTime?: string
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

export enum CronStatus {
  Scheduled = 'Scheduled',
  Stopped = 'Stopped',
}

export class BotStatusDto {
  status: CronStatus
}

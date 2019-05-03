import { Profit } from './profit';

export interface TradingBot {
    id: number;
    name: string;
    type: string;
    financialInstrument: string;
    strategy: string;
    profit: Profit;
    workedTime: string;
    status: string;
}

export interface CreatedTradingBot {
    name: string;
    sum: number;
    goal: Goal;
    goalValue: number;
    strategy: string;
    instrument: string;
}

enum Goal {
    profit = 0,
    risk = 1
}

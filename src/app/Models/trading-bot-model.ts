import { Profit } from "./profit";

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

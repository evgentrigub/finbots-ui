import { InvestorType } from './investor-type-enum';

export interface StatsView {
    profit: number;
    account: number;
    robotQuantity: number;
    riskType: InvestorType;
}

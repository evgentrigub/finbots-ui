import { InvestorTypeCharacter } from './enums';

export interface StatsView {
  profit: number;
  account: number;
  robotQuantity: number;
  riskType: InvestorTypeCharacter;
}

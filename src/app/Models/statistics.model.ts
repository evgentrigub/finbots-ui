import { InvestorTypeCharacter } from './enums';

export interface Answer {
  content: string;
  answerRate: number;
}

export interface StatsView {
  profit: number;
  account: number;
  robotQuantity: number;
  riskType: InvestorTypeCharacter;
}

export interface Question {
  objContent: string;
  answers: Answer[];
}

export class Profit<T> {
  asset: SelectData<T>[];
  percentage: number;
  isActive: boolean;
}

export interface SelectData<T> {
  name: string;
  value: T;
}

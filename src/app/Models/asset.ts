
import { FinancialInstrument } from "./financial-instrument-enum";
import { industry } from "./industry-enum";

export class Asset {
    name: string;
    industry: industry;
    financialInstrument: FinancialInstrument
}
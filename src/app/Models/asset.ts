import { Industry } from "./industry-enum";
import { FinancialInstrument } from "./financial-instrument-enum";

export class Asset {
    name: string;
    industry: Industry;
    financialInstrument: FinancialInstrument
}
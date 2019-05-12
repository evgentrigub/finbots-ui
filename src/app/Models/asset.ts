import { FinancialInstrument } from './financial-instrument-enum';
import { Industry } from './industry-enum';

export class Asset {
    name: string;
    industry: Industry;
    financialInstrument: FinancialInstrument;
}

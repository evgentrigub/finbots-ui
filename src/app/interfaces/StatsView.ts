import { DecimalPipe } from "@angular/common";
import { User } from "../account/_models/user";
import { InvestorType } from "../Models/investor-type-enum";


export interface StatsView {
    profit: number,
    account: number,
    robotQuantity: number,
    riskType: InvestorType
}
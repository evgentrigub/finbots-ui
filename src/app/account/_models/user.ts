import { InvestorType } from "src/app/Models/investor-type-enum";

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
    account: number;
    riskType: InvestorType
}
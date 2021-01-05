import { InvestorTypeCharacter } from 'src/app/models/enums';

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
  account: number;
  riskType: InvestorTypeCharacter;
}

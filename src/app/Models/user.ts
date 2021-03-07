import { InvestorTypeCharacter } from "src/app/models/enums";
import { Bot } from "src/app/models/trading-bot-model";

export class User {
  email: string;

  token: string;
  riskType?: InvestorTypeCharacter;

  // profile: {
  //   bitrhDate: Date;
  //   name: string;
  //   gender: string;
  //   location: string;
  //   username: string;
  // };

  bots?: Bot[]
}

export interface UserDto {
  email: string;
  password: string;
}

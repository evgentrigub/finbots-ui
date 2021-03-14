import { InvestorTypeCharacter } from "src/app/models/enums";
import { Bot } from "src/app/models/trading-bot-model";

export class User {
  token: string;
  tinkoffToken?: string;
  email?: string;
  profile?: UserProfile
  riskType?: InvestorTypeCharacter;
  bots?: Bot[]
}

export interface UserProfile {
  name: string;
  lastName: string;
  bitrhDate: Date;
  gender: string;
  location: string;
};

export interface UserDto {
  email: string;
  password: string;
}

export interface UserProfileDto {
  email: string;
  name: string;
  lastName: string;
  bitrhDate: Date;
  gender: string;
  location: string;
  tinkoffToken: string;
};
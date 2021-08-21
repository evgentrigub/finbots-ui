import { InvestorTypeCharacter } from "../models/enums";
import { TradingBot } from "../models/trading-bot.model";

export class User {
  token: string;
  email?: string;
  profile?: UserProfile
  riskType?: InvestorTypeCharacter;
  bots?: TradingBot[]

  tinkoffToken?: string;
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

  tinkoffToken?: string;
  isTinkoffToken: boolean;
};
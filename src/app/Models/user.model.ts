import { TradingBot } from "./trading-bot.model";

export class User {
  token: string;
  email?: string;
  bots?: TradingBot[]

  tinkoffToken?: string;
}

export interface UserDto {
  email: string;
  password: string;
}

export interface UserProfileDto {
  email: string;
  tinkoffToken?: string;
  isTinkoffToken: boolean;
};

export class UserTokenDto {
  token: string
}

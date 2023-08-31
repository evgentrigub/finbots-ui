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
};

export class UserTokenDto {
  token: string
}

export class UserLocalStorage {
  email: string;
  token: string
}

export class ValidateTokenDto {
  isValid: boolean
}

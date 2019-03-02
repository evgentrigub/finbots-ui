import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  mockStrategies: string[] = ['Стратегия1'];
  constructor() { }

  getStrategies(){
    return this.mockStrategies;
  }
}

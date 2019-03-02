import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinancialInstrumentsService {

  mockFinancialInstruments: string[] = ['Акции', 'Индексы', 'Валюта', 'Криптовалюта', 'ПФИ'];
  constructor() { }

  getFinancialInstruments() {
    return this.mockFinancialInstruments;
  }

}

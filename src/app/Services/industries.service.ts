import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndustriesService {

  constructor() { }
  mockIndusties: string[] = ['IT-отрасль', 'Строительство','Транспорт','Связь','Общепит'];

  getIndustries(){
    return this.mockIndusties;
  }

}

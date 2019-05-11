import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Strategy } from 'src/app/models/strategy';
import { StrategyService } from 'src/app/services/strategy.service';

@Component({
  selector: 'app-strategies-rating',
  templateUrl: './strategies-rating.component.html',
  styleUrls: ['./strategies-rating.component.css']
})
export class StrategiesRatingComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<Strategy> = new MatTableDataSource;
  isLoading = true;

  constructor(
    private strategyService: StrategyService,
  ) { }

  ngOnInit() {
    this.getStrategies();
  }

  getStrategies(){
    this.strategyService.getStrategies().subscribe(r => {
      this.dataSource.data = r;
      console.log(r);
      this.isLoading =  false;
    })
  }
}

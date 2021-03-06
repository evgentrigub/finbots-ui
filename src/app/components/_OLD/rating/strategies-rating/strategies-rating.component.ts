import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Strategy } from '../../models/strategy';
import { StrategyService } from '../../services/strategy.service';

@Component({
  selector: 'app-strategies-rating',
  templateUrl: './strategies-rating.component.html',
  styleUrls: ['./strategies-rating.component.css'],
})
export class StrategiesRatingComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource: MatTableDataSource<Strategy> = new MatTableDataSource();
  isLoading = true;

  constructor(private strategyService: StrategyService) { }

  ngOnInit() {
    this.getStrategies();
  }

  getStrategies() {
    this.strategyService.getStrategies().subscribe(r => {
      this.dataSource.data = r;
      this.isLoading = false;
    });
  }
}

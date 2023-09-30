import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OperationDto, OperationStatus } from '../../models/operation.model';
import { OperationService } from 'src/app/services/operation.service';
import { TradingBotsService } from 'src/app/services/trading-bots.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { BotDto, TradingBot } from 'src/app/models/trading-bot.model';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss'],
})
export class OperationsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'botId', 'ticker', 'createdDate', 'price', 'operationType', 'status'];
  dataSource: MatTableDataSource<OperationDto> = new MatTableDataSource();
  isLoading = false;
  bots: TradingBot[];


  constructor(
    private operationService: OperationService,
    private readonly tradingBotsService: TradingBotsService,
  ) {}

  ngOnInit() {
    this.getOperations().subscribe(botsOperations => {
      let commonList: OperationDto[] = []
      botsOperations.forEach(el => commonList = commonList.concat(el))

      this.dataSource.data = commonList
    });
  }

  private getOperations(): Observable<OperationDto[][]> {
    return this.getBots().pipe(
      switchMap(bots => {
        const operationDtos$ = bots.map(bot => this.operationService.getOperations(bot.id));
        return forkJoin(operationDtos$);
      })
    )
  }

  private getBots(): Observable<TradingBot[]> {
    return this.tradingBotsService.getUserBots()
      .pipe(tap(bots => this.bots = bots))
  }

  // private mockOperations: OperationDto[] = [
  //   {
  //     id: 0,
  //     botId: 1,
  //     ticker: 'F',
  //     createdDate: new Date("2022-05-13T12:33:37.000Z"),
  //     price: 15.4,
  //     operationType: "buy",
  //     status: OperationStatus.Progress,
  //     isSuccess: true,
  //   },
  //   {
  //     id: 0,
  //     botId: 2,
  //     ticker: 'PFE',
  //     createdDate: new Date("2022-06-13T12:33:37.000Z"),
  //     price: 16.11,
  //     operationType: "sell",
  //     status: OperationStatus.Done,
  //     isSuccess: true,
  //   },
  //   {
  //     id: 0,
  //     botId: 1,
  //     ticker: 'F',
  //     createdDate: new Date("2022-07-13T12:33:37.000Z"),
  //     price: 12.11,
  //     operationType: "sell",
  //     status: OperationStatus.Decline,
  //     isSuccess: true,
  //   },
  //   {
  //     id: 0,
  //     botId: 2,
  //     ticker: 'PFE',
  //     createdDate: new Date("2022-08-13T12:33:37.000Z"),
  //     price: 0.35,
  //     operationType: "comission",
  //     status: OperationStatus.Done,
  //     isSuccess: false,
  //   },
  // ]

}

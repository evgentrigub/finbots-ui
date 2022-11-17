import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Operation, OperationStatus } from '../../models/operation.model';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss'],
})
export class OperationsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'ticker', 'createdDate', 'price', 'operationType', 'status'];
  dataSource: MatTableDataSource<Operation> = new MatTableDataSource();
  isLoading = false;


  constructor() {}

  ngOnInit() {
    this.dataSource.data = this.getOperations();
  }

  private getOperations(): Operation[] {
    return this.mockOperations;
  }

  private mockOperations: Operation[] = [
    {
      botId: 1,
      ticker: 'F',
      createdDate: new Date("2022-05-13T12:33:37.000Z"),
      price: 15.4,
      operationType: "buy",
      status: OperationStatus.progress,
      isSuccess: true,
    },
    {
      botId: 2,
      ticker: 'PFE',
      createdDate: new Date("2022-06-13T12:33:37.000Z"),
      price: 16.11,
      operationType: "sell",
      status: OperationStatus.done,
      isSuccess: true,
    },
    {
      botId: 1,
      ticker: 'F',
      createdDate: new Date("2022-07-13T12:33:37.000Z"),
      price: 12.11,
      operationType: "sell",
      status: OperationStatus.decline,
      isSuccess: true,
    },
    {
      botId: 2,
      ticker: 'PFE',
      createdDate: new Date("2022-08-13T12:33:37.000Z"),
      price: 0.35,
      operationType: "comission",
      status: OperationStatus.done,
      isSuccess: false,
    },
  ]

}

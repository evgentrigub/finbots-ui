import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Operation } from '../../models/operation.model';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss'],
})
export class OperationsComponent implements OnInit {

  displayedColumns: string[] = ['createdDate', 'price', 'operationType', 'status', 'isSuccess'];
  dataSource: MatTableDataSource<Operation> = new MatTableDataSource();
  isLoading = false;


  constructor(
  ) {
  }

  ngOnInit() {
    this.dataSource.data = this.getOperationById(0);
  }

  getOperationById(id: number) {
    return this.mockOperations;
  }

  public mockOperations: Operation[] = [
    {
      createdDate: new Date("2020-05-13T12:33:37.000Z"),
      price: 14.4,
      operationType: "buy",
      status: 'done',
      isSuccess: true,
    },
    {
      createdDate: new Date("2020-05-13T12:33:37.000Z"),
      price: 11.11,
      operationType: "sell",
      status: 'done',
      isSuccess: true,
    },
    {
      createdDate: new Date("2020-05-13T12:33:37.000Z"),
      price: 240.5,
      operationType: "comission",
      status: 'decline',
      isSuccess: false,
    },
  ]

}
import { Component, OnInit, Inject } from '@angular/core';
import { Strategy } from 'src/app/Models/strategy';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-strategy-dialog',
  templateUrl: './strategy-dialog.component.html',
  styleUrls: ['./strategy-dialog.component.css']
})
export class StrategyDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Strategy
  ) { }

  ngOnInit() {
  }

}

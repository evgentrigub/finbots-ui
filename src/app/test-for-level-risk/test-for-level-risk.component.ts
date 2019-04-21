import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-for-level-risk',
  templateUrl: './test-for-level-risk.component.html',
  styleUrls: ['./test-for-level-risk.component.css']
})
export class TestForLevelRiskComponent implements OnInit {

  dataFrom: FormGroup;

  constructor() {
    this.dataFrom = new FormGroup({
      "questionContent": new FormControl('', Validators.required),
      "answers": new FormControl('', Validators.required)
    })
   }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from '../Models/Questions';
import { TaskService } from '../services/task.service';
import { MatRadioChange } from '@angular/material';
import { Answers } from '../Models/Answers';

@Component({
  selector: 'app-test-for-level-risk',
  templateUrl: './test-for-level-risk.component.html',
  styleUrls: ['./test-for-level-risk.component.css']
})
export class TestForLevelRiskComponent implements OnInit {

  dataFrom: FormGroup;
  questions: Question[];
  rating = 0;
  selection: Answers;

  constructor(
    private taskService: TaskService,
  ) {
    this.dataFrom = new FormGroup({
      'answers': new FormControl('', Validators.required)
    });
   }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.taskService.getQuestionsList().subscribe(r => {
      this.questions = r;
    });
  }

  radioChange(event: MatRadioChange) {
    this.rating = this.rating + event.value.answerRate;
  }

  /**
   * преобразует полученный результат в процент
   * и отправляет его в статистику пользователя на бек
   */
  submit() {
    if (this.dataFrom.valid) {console.log('fdf')}

  }



}

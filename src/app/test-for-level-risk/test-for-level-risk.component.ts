import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Question } from '../models/question';
import { TaskService } from '../services/task.service';
import { Answer } from '../models/answer';
import { Observable } from 'rxjs';
import { InvestorType } from '../Models/investor-type-enum';

@Component({
  selector: 'app-test-for-level-risk',
  templateUrl: './test-for-level-risk.component.html',
  styleUrls: ['./test-for-level-risk.component.css']
})
export class TestForLevelRiskComponent implements OnInit {

  questionsAnswers: Question[];
  rating = 0;
  selection: Answer;
  investorType$: Observable<InvestorType>;

  readonly formGroup: FormGroup;
  readonly questionsControl: FormArray;

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {
    this.questionsControl = this.formBuilder.array([]);
    this.formGroup = this.formBuilder.group({
      questions: this.questionsControl
    });
   }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.taskService.getQuestionsList().subscribe((results: Question[]) => {

      while (this.questionsControl.length !== 0) {
        this.questionsControl.removeAt(0);
      }

      this.formGroup.reset();
      if (!results) {
        this.questionsAnswers = [];
        return;
      }
      this.questionsAnswers = results;

      results
      .map(res => this.createFormGroupQuestion(res))
      .forEach(el => {
        this.questionsControl.push(el);
      });
    });
  }

  createFormGroupQuestion(question: Question): FormGroup {
    return this.formBuilder.group({
      question: this.formBuilder.control(question.objContent),
      answers: this.formBuilder.control(question.answers),
      answer: this.formBuilder.control('', [Validators.required])
    });
  }

  /**
   * Считает сумму баллов теста и возвращает тип инвестора
   */
  submitTest() {
    if (!this.formGroup.valid) {
      return;
    }

    const questions = this.formGroup.get('questions');
    if (!questions) {
      return;
    }
    let sum = 0;
    const list = this.formGroup.get('questions').value;
    for (const el of list) {
      sum = +sum + +el.answer;
    }

    this.taskService.getInvestorType(sum).subscribe(r => {
      console.log(`result`, r);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Question } from '../Models/Question';
import { TaskService } from '../services/task.service';
import { User } from '../account/_models/user';
import { AuthenticationService } from '../account/_services/authentication.service';

@Component({
  selector: 'app-test-for-level-risk',
  templateUrl: './test-for-level-risk.component.html',
  styleUrls: ['./test-for-level-risk.component.css']
})
export class TestForLevelRiskComponent implements OnInit {

  questionsAnswers: Question[];
  currentUser: User;

  readonly formGroup: FormGroup;
  readonly questionsControl: FormArray;

  constructor(
    private taskService: TaskService,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {
    this.questionsControl = this.formBuilder.array([]);
    this.formGroup = this.formBuilder.group({
      questions: this.questionsControl
    });
    this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
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
   * Считает сумму баллов теста
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
    const list = questions.value;
    for (const el of list) {
      sum = +sum + +el.answer;
    }

    this.taskService.postInvestorType(this.currentUser, sum).subscribe(r => {
      console.log(`result`, r);
    });
  }
}

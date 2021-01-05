import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { BotNameComponent } from './bot-name.component';

describe('ProjectNameComponent', () => {
  // let service: ProjectsService;
  // let component: BotNameComponent;
  // let fixture: ComponentFixture<BotNameComponent>;
  // let editProjectSpy: jasmine.Spy;
  // beforeEach(async(() =>
  //   TestBed.configureTestingModule({
  //     declarations: [BotNameComponent],
  //     imports: [
  //       HttpClientTestingModule,
  //       ReactiveFormsModule,
  //       RouterTestingModule,
  //       MatIconModule,
  //       MatFormFieldModule,
  //       MatSnackBarModule,
  //       MatInputModule,
  //       BrowserAnimationsModule,
  //       FormsModule,
  //     ],
  //     providers: [ProjectsService],
  //   }).compileComponents()));
  // beforeEach(() => {
  //   service = TestBed.get(ProjectsService);
  //   fixture = TestBed.createComponent(BotNameComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('should enbled editMode when click on edit button', () => {
  //   // arrange
  //   component.projectName = 'project';
  //   component.projectId = '1';
  //   component.hover = true;
  //   component.editMode = false;
  //   fixture.detectChanges();
  //   const btnEdit = fixture.debugElement.query(By.css('button.edit'));
  //   // act
  //   btnEdit.triggerEventHandler('click', null);
  //   // assert
  //   expect(component.editMode).toBe(true);
  // });
  // it('should visible edit button when mouse over on view mode', () => {
  //   // arrange
  //   component.projectName = 'project';
  //   component.projectId = '1';
  //   component.editMode = false;
  //   component.hover = false;
  //   fixture.detectChanges();
  //   const container = fixture.debugElement.query(By.css('div.name'));
  //   const btnEditBefore = fixture.debugElement.query(By.css('button.edit'));
  //   // act
  //   container.triggerEventHandler('mouseover', null);
  //   fixture.detectChanges();
  //   // assert
  //   expect(component.hover).toBe(true);
  //   const btnEditAfter = fixture.debugElement.query(By.css('button.edit'));
  //   expect(btnEditBefore).toBeFalsy();
  //   expect(btnEditAfter).toBeTruthy();
  // });
  // it('should hide edit button when mouse leave on view mode', () => {
  //   // arrange
  //   component.projectName = 'project';
  //   component.projectId = '1';
  //   component.editMode = false;
  //   component.hover = true;
  //   fixture.detectChanges();
  //   const container = fixture.debugElement.query(By.css('div.name'));
  //   const btnEditBefore = fixture.debugElement.query(By.css('button.edit'));
  //   // act
  //   container.triggerEventHandler('mouseleave', null);
  //   fixture.detectChanges();
  //   // assert
  //   expect(component.hover).toBe(false);
  //   const btnEditAfter = fixture.debugElement.query(By.css('button.edit'));
  //   expect(btnEditBefore).toBeTruthy();
  //   expect(btnEditAfter).toBeFalsy();
  // });
  // it('should visible save button when input name is different on edit mode', () => {
  //   // arrange
  //   component.projectName = 'project';
  //   component.projectId = '1';
  //   component.editMode = true;
  //   fixture.detectChanges();
  //   const canSaveDefore = component.canSave;
  //   const btnSaveBefore = fixture.debugElement.query(By.css('button.save'));
  //   const inputName = <HTMLInputElement>fixture.debugElement.query(By.css('input')).nativeElement;
  //   // act
  //   inputName.value = 'project1';
  //   inputName.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();
  //   // assert
  //   const btnSaveAfter = fixture.debugElement.query(By.css('button.save'));
  //   expect(btnSaveBefore).toBeFalsy();
  //   expect(btnSaveAfter).toBeTruthy();
  //   expect(canSaveDefore).toBe(false);
  //   expect(component.canSave).toBe(true);
  // });
  // it('should visible undo button when input name is different on edit mode', () => {
  //   // arrange
  //   component.projectName = 'project';
  //   component.projectId = '1';
  //   component.editMode = true;
  //   fixture.detectChanges();
  //   const canUndoDefore = component.canUndo;
  //   const btnUndoBefore = fixture.debugElement.query(By.css('button.undo'));
  //   const inputName = <HTMLInputElement>fixture.debugElement.query(By.css('input')).nativeElement;
  //   // act
  //   inputName.value = 'project1';
  //   inputName.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();
  //   // assert
  //   const btnUndoAfter = fixture.debugElement.query(By.css('button.undo'));
  //   expect(btnUndoBefore).toBeFalsy();
  //   expect(btnUndoAfter).toBeTruthy();
  //   expect(canUndoDefore).toBe(false);
  //   expect(component.canUndo).toBe(true);
  // });
  // it('should undo changes when click undo button on edit mode', () => {
  //   // arrange
  //   component.projectName = 'intial project name';
  //   component.projectId = '1';
  //   component.editMode = true;
  //   fixture.detectChanges();
  //   const inputName = <HTMLInputElement>fixture.debugElement.query(By.css('input')).nativeElement;
  //   inputName.value = 'project new';
  //   inputName.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();
  //   const btnUndo = fixture.debugElement.query(By.css('button.undo'));
  //   // act
  //   btnUndo.triggerEventHandler('click', null);
  //   fixture.detectChanges();
  //   // assert
  //   const nameView = <HTMLDivElement>fixture.debugElement.query(By.css('div.name span')).nativeElement;
  //   expect(nameView.innerText).toBe('intial project name');
  //   expect(component.editMode).toBe(false);
  //   expect(component.canUndo).toBe(false);
  //   expect(component.canSave).toBe(false);
  //   expect(component.hover).toBe(false);
  //   const inputNameAfter = fixture.debugElement.query(By.css('input'));
  //   expect(inputNameAfter).toBeFalsy(inputNameAfter);
  // });
  // it('should hide save and undo buttons after save changes when on edit mode', () => {
  //   // arrange
  //   editProjectSpy = spyOn(service, 'editProject').and.returnValue(of(null));
  //   component.projectName = 'intial project name';
  //   component.projectId = '1';
  //   component.editMode = true;
  //   fixture.detectChanges();
  //   const inputName = <HTMLInputElement>fixture.debugElement.query(By.css('input')).nativeElement;
  //   inputName.value = 'project new';
  //   inputName.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();
  //   const btnSave = fixture.debugElement.query(By.css('button.save'));
  //   // act
  //   btnSave.triggerEventHandler('click', null);
  //   fixture.detectChanges();
  //   // assert
  //   const btnUndoAfter = fixture.debugElement.query(By.css('button.undo'));
  //   const btnSaveAfter = fixture.debugElement.query(By.css('button.save'));
  //   expect(btnUndoAfter).toBeFalsy();
  //   expect(btnSaveAfter).toBeFalsy();
  //   expect(component.canUndo).toBe(false);
  //   expect(component.canSave).toBe(false);
  //   expect(component.hover).toBe(false);
  //   const nameView = <HTMLDivElement>fixture.debugElement.query(By.css('div.name span')).nativeElement;
  //   expect(nameView.innerText).toBe('project new');
  // });
  // it('should send input value to service', () => {
  //   // arrange
  //   editProjectSpy = spyOn(service, 'editProject').and.returnValue(of(null));
  //   component.projectName = 'project';
  //   component.projectId = '1';
  //   component.editMode = true;
  //   fixture.detectChanges();
  //   const inputName = <HTMLInputElement>fixture.debugElement.query(By.css('input')).nativeElement;
  //   inputName.value = 'project1';
  //   inputName.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();
  //   const btnSave = fixture.debugElement.query(By.css('button.save'));
  //   // act
  //   btnSave.triggerEventHandler('click', null);
  //   // assert
  //   expect(editProjectSpy.calls.count()).toBe(1);
  //   expect(editProjectSpy.calls.argsFor(0)).toEqual([{ name: 'project1' }, '1']);
  // });
  // it('should return error, when change project name on exist name', () => {
  //   //arrange
  //   editProjectSpy = spyOn(service, "editProject").and.throwError('Проект с именем project1 уже существует');
  //   component.projectFormGroup = projFg;
  //   component.projectId = '2';
  //   fixture.detectChanges();
  //   let inputDe = fixture.debugElement.query(By.css('input'));
  //   let inputEl = inputDe.nativeElement as HTMLInputElement;
  //   inputEl.value = 'project1';
  //   inputEl.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();
  //   //act
  //   let button = fixture.debugElement.query(By.css('mat-icon'));
  //   button.triggerEventHandler('click', null);
  //   //assert
  //   expect(editProjectSpy.calls.count()).toBe(1);
  //   //expect(editProjectSpy.call).toThrowError('Проект с именем project1 уже существует');
  // })
});

import { tap } from 'rxjs/operators';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-bot-name',
  templateUrl: './bot-name.component.html',
  styleUrls: ['./bot-name.component.css'],
})
export class BotNameComponent {
  // @Input()
  // set projectId(value: string) {
  //   this.id = value;
  // }

  @Input()
  set botName(value: string) {
    this.original = value;
    this.current = value;
  }

  // id: string;
  original: string;
  current: string;
  editMode = false;
  hover = false;

  constructor(
    // private readonly service: ProjectsService,
    private readonly snackBar: MatSnackBar,
    private readonly changeDetectorRef: ChangeDetectorRef) {}

  get canUndo(): boolean {
    return this.current !== this.original;
  }

  undo(): void {
    if (this.canUndo) {
      this.current = this.original;
    }

    this.editMode = false;
    this.hover = false;
  }

  toView(): void {
    if (!this.canUndo) {
      this.editMode = false;
      this.hover = false;
    }
  }

  get canSave(): boolean {
    // if (!this.id) {
    //   return false;
    // }

    if (this.current !== this.original && this.current && this.current.length > 2 && this.current.length <= 255) {
      return true;
    }

    return false;
  }

  save() {
    if (!this.canSave) {
      return;
    }

    const name = this.current;

    if (!name) {
      return;
    }

    this.botName = name;
    this.editMode = false;
    this.hover = false;
    this.changeDetectorRef.markForCheck();

    // this.service
    //   .editProject({ name: name }, this.id)
    //   .pipe(
    //     tap(
    //       _ => {
    //         this.showMessage('Успешно сохранено');
    //         this.projectName = name;
    //         this.editMode = false;
    //         this.hover = false;
    //         this.ref.markForCheck();
    //       },
    //       error => this.showMessage(error)
    //     )
    //   )
    //   .subscribe();
  }

  showMessage(msg: any) {
    this.snackBar.open(msg, undefined, { duration: 2000 });
  }
}

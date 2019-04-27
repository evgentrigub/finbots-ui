import { tap } from 'rxjs/operators';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TradingBotsService } from 'src/app/services/trading-bots.service';
import { TradingBot } from 'src/app/Models/trading-bot-model';

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
  set bot(value: TradingBot) {
    console.log(value)
    this.original = value.name;
    this.current = value.name;
  }

  // id: string;
  original: string;
  current: string;
  editMode = false;
  hover = false;

  constructor(
    private readonly service: TradingBotsService,
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
    if (this.current !== this.original && this.current && this.current.length > 2 && this.current.length <= 255) {
      return true;
    }

    return false;
  }

  save() {
    console.log(this.bot)
    if (!this.canSave) {
      return;
    }

    const name = this.current;

    if (!name) {
      return;
    }

    // this.botName = name;
    // this.editMode = false;
    // this.hover = false;
    // this.changeDetectorRef.markForCheck();

    this.service
      .updateRobotName(this.bot)
      .pipe(
        tap(
          _ => {
            this.showMessage('Успешно сохранено');
            this.bot.name = name;
            this.editMode = false;
            this.hover = false;
            this.changeDetectorRef.markForCheck();
          },
          error => this.showMessage(error)
        )
      )
      .subscribe();
  }

  showMessage(msg: any) {
    this.snackBar.open(msg, undefined, { duration: 2000 });
  }
}

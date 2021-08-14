import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import * as Chartist from 'node_modules/chartist';
import { UserStatsService } from '../../services/user-stats.service';
import { MatDialog } from '@angular/material/dialog';
import { AddModeyToAccountComponent } from './add-modey-to-account/add-modey-to-account.component';
import { TaskService } from '../../services/task.service';
import { InvestorTypeCharacter } from '../../models/enums';
import { AuthenticationService } from '../../services/authentication.service';
import { StatsView } from '../../models/statistics.model';
import { TradingBotsService } from 'src/app/services/trading-bots.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  riskType: string;
  loading = true;
  stats: StatsView = {
    profit: 0.0,
    robotQuantity: 0,
    account: 0.0,
    riskType: InvestorTypeCharacter.Moderate,
  };

  constructor(
    private authenticationService: AuthenticationService,
    private userStatService: UserStatsService,
    private taskService: TaskService,
    public dialog: MatDialog,
    private service: TradingBotsService
  ) {
    this.currentUserSubscription = this.authenticationService.$currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddModeyToAccountComponent, {
      panelClass: 'dialog',
      data: this.currentUser,
      disableClose: true,
    });
    dialogRef.backdropClick().subscribe(result => {
      if (confirm('Закрыть окно?')) {
        dialogRef.close();
      }
    });
    dialogRef.afterClosed().subscribe(r => this.getStats());
  }

  ngOnInit(): void {
    this.getStats();
    this.createFirstChart();
    this.createSecondChart();
    this.createThirdChart();
  }

  getStats() {
    // this.userStatService.getStatsById(this.currentUser.id).subscribe(stats => {
    this.userStatService.getStatsById(0).subscribe(stats => {
      this.stats = stats;
      this.riskType = this.taskService.convertRiskToString(this.stats.riskType);
      this.loading = false;
    });
  }

  createFirstChart() {
    const dataDailySalesChart: any = {
      labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      series: [[12, 17, 7, 17, 23, 18, 10, 5, -3, 6, 8,]],
    };

    const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0,
      }),
      low: -10,
      high: 30, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

    this.startAnimationForLineChart(dailySalesChart);
  }

  createSecondChart() {
    const datawebsiteViewsChart = {
      labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      series: [[100, 140, 137, 180, 553, 453, 326, 434, 568, 610, 756, 895]],
    };
    const optionswebsiteViewsChart = {
      axisX: {
        showGrid: false,
      },
      low: 0,
      high: 1000,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 },
    };
    const responsiveOptions: any[] = [
      [
        'screen and (max-width: 640px)',
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ];
    const websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

    this.startAnimationForBarChart(websiteViewsChart);
  }

  createThirdChart() {
    const dataCompletedTasksChart: any = {
      labels: this.service.mockBotsArray.map(c => c.ticker),
      series: [[100, 140]],
    };

    const optionswebsiteViewsChart = {
      axisX: {
        showGrid: false,
      },
      low: 0,
      high: 1000,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 },
    };
    const responsiveOptions: any[] = [
      [
        'screen and (max-width: 640px)',
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ];
    const websiteViewsChart = new Chartist.Bar('#completedTasksChart', dataCompletedTasksChart, optionswebsiteViewsChart, responsiveOptions);


    this.startAnimationForLineChart(websiteViewsChart);
  }

  private startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint,
          },
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease',
          },
        });
      }
    });

    seq = 0;
  }

  private startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease',
          },
        });
      }
    });

    seq2 = 0;
  }
}

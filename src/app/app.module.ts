import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { routing } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { CreateBotComponent } from './create-bot/create-bot.component';
import { TableBotsComponent } from './table-bots/table-bots.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { StrategiesComponent } from './strategies/strategies.component';
import { RatingComponent } from './rating/rating.component';
import { BlogComponent } from './blog/blog.component';
import { TestForLevelRiskComponent } from './test-for-level-risk/test-for-level-risk.component';
import { AddModeyToAccountComponent } from './main-dashboard/add-modey-to-account/add-modey-to-account.component';
import { BotNameComponent } from './table-bots/bot-name/bot-name.component';
import { BotStatsDialogComponent } from './table-bots/bot-stats-dialog/bot-stats-dialog.component';
import { StrategyDialogComponent } from './strategies/strategy-dialog/strategy-dialog.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserRatingComponent } from './rating/user-rating/user-rating.component';
import { StrategiesRatingComponent } from './rating/strategies-rating/strategies-rating.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainDashboardComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    CreateBotComponent,
    TableBotsComponent,
    WidgetsComponent,
    StrategiesComponent,
    RatingComponent,
    BlogComponent,
    TestForLevelRiskComponent,
    AddModeyToAccountComponent,
    BotNameComponent,
    BotStatsDialogComponent,
    StrategyDialogComponent,
    UserRatingComponent,
    StrategiesRatingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    RouterModule,
    FormsModule,
    routing,

    // MATERIAL
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSliderModule,
    MatRadioModule,
    MatTableModule,
    MatTooltipModule,
    MatBadgeModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDialogModule,
    MDBBootstrapModule.forRoot(),
  ],
  entryComponents: [AddModeyToAccountComponent, BotStatsDialogComponent, StrategyDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

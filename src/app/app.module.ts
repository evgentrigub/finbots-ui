import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
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
import { WidgetsComponent } from './components/main-dashboard/widgets/widgets.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { BotNameComponent } from './components/table-bots/bot-name/bot-name.component';
import { BotStatsDialogComponent } from './components/table-bots/bot-stats-dialog/bot-stats-dialog.component';
import { TableBotsComponent } from './components/table-bots/table-bots.component';
import { TestForLevelRiskComponent } from './components/test-for-level-risk/test-for-level-risk.component';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AboutComponent } from './components/account/about/about.component';
import { SettingsComponent } from './components/account/settings/settings.component';
import { CreateBotComponent } from './components/create-bot/create-bot.component';
import { AddModeyToAccountComponent } from './components/main-dashboard/add-modey-to-account/add-modey-to-account.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

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
    TestForLevelRiskComponent,
    AddModeyToAccountComponent,
    BotNameComponent,
    BotStatsDialogComponent,
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
  entryComponents: [AddModeyToAccountComponent, BotStatsDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

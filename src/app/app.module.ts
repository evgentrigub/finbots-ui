import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Routes, RouterModule} from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
        MatGridListModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule,
        MatSnackBarModule, MatProgressSpinnerModule, MatSelectModule, MatSliderModule,
        MatTableModule, MatTooltipModule, MatRadioModule, MatBadgeModule, MatDialogModule } from '@angular/material';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { routing } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './account/_components/alert.component';
import { AboutComponent } from './about/about.component';
import { CreateBotComponent } from './create-bot/create-bot.component';
import { TableBotsComponent } from './table-bots/table-bots.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { StrategiesComponent } from './strategies/strategies.component';
import { RatingComponent } from './rating/rating.component';
import { BlogComponent } from './blog/blog.component';
import { TestForLevelRiskComponent } from './test-for-level-risk/test-for-level-risk.component';
import { AddModeyToAccountComponent } from './add-modey-to-account/add-modey-to-account.component';
import { BotNameComponent } from './table-bots/project-name/bot-name.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainDashboardComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    AboutComponent,
    CreateBotComponent,
    TableBotsComponent,
    WidgetsComponent,
    StrategiesComponent,
    RatingComponent,
    BlogComponent,
    TestForLevelRiskComponent,
    AddModeyToAccountComponent,
    BotNameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    RouterModule,
    routing,
    FormsModule,
    MatDialogModule,

    // MATERIAL
    MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatIconModule, MatListModule, MatGridListModule,
    MatCardModule, MatMenuModule, MatFormFieldModule,
    MatInputModule, MatIconModule, MatSnackBarModule,
    MatProgressSpinnerModule, MatSelectModule, MatSliderModule,
    MatRadioModule, MatTableModule, MatTooltipModule, MatBadgeModule
  ],
  entryComponents: [
    AddModeyToAccountComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AuthGuard } from './account/_guards/auth.guard';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { CreateBotComponent } from './create-bot/create-bot.component';
import { RatingComponent } from './rating/rating.component';
import { BlogComponent } from './blog/blog.component';
import { StrategiesComponent } from './strategies/strategies.component';
import { TableBotsComponent } from './table-bots/table-bots.component';
import { TestForLevelRiskComponent } from './test-for-level-risk/test-for-level-risk.component';

const appRoutes: Routes = [
    {path: 'create', component: CreateBotComponent, canActivate: [AuthGuard]},
    {path: 'table', component: TableBotsComponent, canActivate: [AuthGuard]},
    {path: 'dashboard', component: MainDashboardComponent, canActivate: [AuthGuard]},
    {path: 'settings', component: SettingsComponent , canActivate: [AuthGuard]},
    {path: 'strategies', component: StrategiesComponent , canActivate: [AuthGuard]},
    {path: 'rating', component: RatingComponent , canActivate: [AuthGuard]},
    {path: 'blog', component: BlogComponent , canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent },
    { path: 'testForRiskLevel', component: TestForLevelRiskComponent },
    { path: '**', redirectTo: 'dashboard' }
];

export const routing = RouterModule.forRoot(appRoutes);
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './components/account/settings/settings.component';
import { AboutComponent } from './components/account/about/about.component';
import { CreateBotComponent } from './components/create-bot/create-bot.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './components/account/login/login.component';
// import { RegisterComponent } from './components/account/register/register.component';
import { TableBotsComponent } from './components/table-bots/table-bots.component';
import { OperationsComponent } from './components/operations/operations.component';

const appRoutes: Routes = [
  { path: 'bots', component: TableBotsComponent, canActivate: [AuthGuard] },
  { path: 'operations', component: OperationsComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateBotComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  // { path: 'signup', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'about' },
];

export const routing = RouterModule.forRoot(appRoutes);

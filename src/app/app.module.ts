import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Routes, RouterModule} from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
        MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SettingsComponent } from './settings/settings.component';

// @ts-ignore
const appRoutes: Routes = [
  {path: 'dashboard', component: MainDashboardComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainDashboardComponent,
    SettingsComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),

    BrowserModule, BrowserAnimationsModule, LayoutModule, RouterModule,

    // MATERIAL
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

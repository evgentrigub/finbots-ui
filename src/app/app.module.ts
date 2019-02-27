import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Routes, RouterModule} from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
        MatGridListModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { routing } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './account/_components/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainDashboardComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
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

    // MATERIAL
    MatToolbarModule, MatButtonModule, MatSidenavModule, 
    MatIconModule, MatListModule, MatGridListModule, 
    MatCardModule, MatMenuModule, MatFormFieldModule,
    MatInputModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
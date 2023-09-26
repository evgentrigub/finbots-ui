import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { WidgetsComponent } from './components/_OLD/main-dashboard/widgets/widgets.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { TableBotsComponent } from './components/table-bots/table-bots.component';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AboutComponent } from './components/navigation-bar/about/about.component';
import { SettingsComponent } from './components/account/settings/settings.component';
import { CreateBotComponent } from './components/create-bot/create-bot.component';
import { DemoModeDialog, NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { OperationsComponent } from './components/operations/operations.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationBarComponent,
        SettingsComponent,
        LoginComponent,
        RegisterComponent,
        AboutComponent,
        CreateBotComponent,
        TableBotsComponent,
        WidgetsComponent,
        OperationsComponent,
        DemoModeDialog,
        ConfirmDialogComponent
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
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatDividerModule,
        MatCheckboxModule,
    ],
    providers: [
        MatDatepickerModule,
        MatNativeDateModule,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: CreateBotInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: SettingsInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: DashboardInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

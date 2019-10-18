import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { environment } from './../environments/environment';

// import { fakeBackendProvider } from './helpers';
import { JwtInterceptor/*, ErrorInterceptor */} from './helpers';

import {SimulateBackendService} from './services/simulate-backend.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { SpvmainComponent } from './components/spvmain/spvmain.component';
import { SpvcfgComponent } from './components/spvcfg/spvcfg.component';
import { SpvgwsComponent } from './components/spvgws/spvgws.component';

import { AppConfig } from './app.config';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './components/alert/alert.component';

// export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
const  Config = new AppConfig();

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    SpvmainComponent,
    SpvcfgComponent,
    SpvgwsComponent,
    HomeComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    environment.production ?
        [] : HttpClientInMemoryWebApiModule.forRoot(SimulateBackendService)  
    ],
  providers: [
    { provide: AppConfig, useValue: Config },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
//    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // provider used to create fake backend
//        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

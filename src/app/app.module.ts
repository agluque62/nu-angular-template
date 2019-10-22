import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { JwtModule } from '@auth0/angular-jwt';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {PruningTranslationLoader} from './helpers/pruning-translation-loader'

import { environment } from './../environments/environment';

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
        [] : HttpClientInMemoryWebApiModule.forRoot(
          SimulateBackendService,{
            passThruUnknownUrl: true  
          }),  
        TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient]
                    }
                }),
        JwtModule.forRoot({
              config: {
                tokenGetter: function  tokenGetter() {
                     var currentuser = localStorage.getItem('currentUser');
                     if (currentuser) {
                       var jcurrentuser = JSON.parse(currentuser);
                       if (jcurrentuser && jcurrentuser.token) {
                         return jcurrentuser.token;
                       }
                     }
                     return null; // localStorage.getItem('access_token');
                   },
                whitelistedDomains: ['localhost:4200'],            // Configurar esto...
                blacklistedRoutes: ['http://localhost:4200/login']
              }
            })
    ],
  providers: [
    { provide: AppConfig, useValue: Config },
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(translate: TranslateService){
    translate.setDefaultLang('es');
    translate.use('es');
    console.log('orden de carga de ficheros de idioma');
  } 
}
  // required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
      return new /*TranslateHttpLoader*/PruningTranslationLoader(http);
 }

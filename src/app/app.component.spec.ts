import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { HttpClientModule} from '@angular/common/http';

import {CommServiceService} from './services/comm-service.service';
import { AppConfig } from './app.config';
import { AlertService } from  './services/alert.service';

import {AuthenticationService} from './services/authentication.service';

import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';

const  Config = new AppConfig();

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        TranslateModule        
      ],
      declarations: [
        AppComponent,
        AlertComponent
      ],
      providers: [
        CommServiceService, 
        AuthenticationService,
        { provide: AppConfig, useValue: Config },
        AlertService, AlertComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'redan3-client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('redan3-client');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('redan3-client app is running!');
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule  } from '@angular/router/testing';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home.component';
import { AuthenticationService } from '../../services/authentication.service'; 

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

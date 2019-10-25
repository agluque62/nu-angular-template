import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule} from '@angular/common/http';

import { SpvgwsComponent } from './spvgws.component';
import { CommServiceService } from '../../services/comm-service.service';
import { AppConfig } from '../../app.config';

const  Config = new AppConfig();

describe('SpvgwsComponent', () => {
  let component: SpvgwsComponent;
  let fixture: ComponentFixture<SpvgwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpvgwsComponent ],
      imports: [HttpClientModule],
      providers: [CommServiceService, { provide: AppConfig, useValue: Config }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpvgwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

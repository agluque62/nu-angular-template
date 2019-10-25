import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule  } from '@angular/router/testing';
import { SpvmainComponent } from './spvmain.component';

describe('SpvmainComponent', () => {
  let component: SpvmainComponent;
  let fixture: ComponentFixture<SpvmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpvmainComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpvmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

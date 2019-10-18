import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpvmainComponent } from './spvmain.component';

describe('SpvmainComponent', () => {
  let component: SpvmainComponent;
  let fixture: ComponentFixture<SpvmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpvmainComponent ]
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

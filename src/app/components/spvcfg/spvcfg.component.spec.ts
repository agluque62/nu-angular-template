import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpvcfgComponent } from './spvcfg.component';

describe('SpvcfgComponent', () => {
  let component: SpvcfgComponent;
  let fixture: ComponentFixture<SpvcfgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpvcfgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpvcfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

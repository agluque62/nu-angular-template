import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpvgwsComponent } from './spvgws.component';

describe('SpvgwsComponent', () => {
  let component: SpvgwsComponent;
  let fixture: ComponentFixture<SpvgwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpvgwsComponent ]
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

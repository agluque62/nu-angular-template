import { TestBed, inject  } from '@angular/core/testing';
import { RouterTestingModule  } from '@angular/router/testing';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  beforeEach(() => TestBed.configureTestingModule(
  {
      imports: [RouterTestingModule],
      providers: [AlertService]
  }));

  // it('should be created', () => {
  //   const service: AlertService = TestBed.get(AlertService);
  //   expect(service).toBeTruthy();
  // });
  it('should be initialized', inject([AlertService], (alertService: AlertService) => {
    expect(alertService).toBeTruthy();
  }));

});

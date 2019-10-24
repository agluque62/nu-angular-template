import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule  } from '@angular/router/testing';

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule(
  	{
      imports: [RouterTestingModule],
      providers: [AuthGuardService]
  	}));

  // it('should be created', () => {
  //   const service: AuthGuardService = TestBed.get(AuthGuardService);
  //   expect(service).toBeTruthy();
  // });
  it('should be initialized', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));

});

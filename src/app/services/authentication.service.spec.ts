import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule(
  	{
      imports: [HttpClientModule],
      providers: [AuthenticationService]  		
  	}));

  // it('should be created', () => {
  //   const service: AuthenticationService = TestBed.get(AuthenticationService);
  //   expect(service).toBeTruthy();
  // });
	it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
	    expect(service).toBeTruthy();
	  }));
});

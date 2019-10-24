import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { AppConfig } from '../app.config';
import { CommServiceService } from './comm-service.service';

const  Config = new AppConfig();

describe('CommServiceService', () => {

  beforeEach(() => TestBed.configureTestingModule(
  	{
      imports: [HttpClientModule],
      providers: [
      	CommServiceService,
		{ provide: AppConfig, useValue: Config },
      ]  		  		
  	}));

  // it('should be created', () => {
  //   const service: CommServiceService = TestBed.get(CommServiceService);
  //   expect(service).toBeTruthy();
  // });
	it('should be created', inject([CommServiceService], (service: CommServiceService) => {
	    expect(service).toBeTruthy();
	  }));
});

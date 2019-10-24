import { TestBed, inject } from '@angular/core/testing';
import { SimulateBackendService } from './simulate-backend.service';

describe('SimulateBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule(
  	{  		
  	}));

  it('should be created', () => {
    const service: SimulateBackendService = TestBed.get(SimulateBackendService);
    expect(service).toBeTruthy();
  });

  it('should be initialized', inject([SimulateBackendService], (service: SimulateBackendService) => {
    expect(service).toBeTruthy();
  }));

});

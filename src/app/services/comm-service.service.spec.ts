import { TestBed } from '@angular/core/testing';

import { CommServiceService } from './comm-service.service';

describe('CommServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommServiceService = TestBed.get(CommServiceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MyfavoriteService } from './myfavorite.service';

describe('MyfavoriteService', () => {
  let service: MyfavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyfavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { KomikuService } from './komiku.service';

describe('KomikuService', () => {
  let service: KomikuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KomikuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

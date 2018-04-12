import { TestBed, inject } from '@angular/core/testing';

import { JasaService } from './jasa.service';

describe('JasaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JasaService]
    });
  });

  it('should be created', inject([JasaService], (service: JasaService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { CobService } from './cob.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('CobServiceService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: CobService = TestBed.get(CobService);
    expect(service).toBeDefined();
  });

  it('foo', () => {
    const service: CobService = TestBed.get(CobService);
    expect(service.getCobMap$().pipe).toBeDefined();
  });

});

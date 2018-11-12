import { TestBed } from '@angular/core/testing';

import { MovieInterceptorService } from './movie-interceptor.service';

describe('MovieInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieInterceptorService = TestBed.get(MovieInterceptorService);
    expect(service).toBeTruthy();
  });
});

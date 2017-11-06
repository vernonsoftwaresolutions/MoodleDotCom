import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SignUpService } from './sign-up.service';

describe('CreateTenantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpModule
        ],
      providers: [SignUpService]
    });
  });

  it('should be created', inject([SignUpService, HttpModule], (http: HttpModule, service: SignUpService) => {
    expect(service).toBeTruthy();
  }));
});

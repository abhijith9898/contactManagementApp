import { TestBed } from '@angular/core/testing';

import { ContactAppService } from './contact-app.service';

describe('ContactAppService', () => {
  let service: ContactAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

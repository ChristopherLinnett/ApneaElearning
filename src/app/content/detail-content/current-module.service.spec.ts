import { TestBed } from '@angular/core/testing';

import { CurrentModuleService } from './current-module.service';

describe('CurrentModuleService', () => {
  let service: CurrentModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

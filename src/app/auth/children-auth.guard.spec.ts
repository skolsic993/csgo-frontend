import { TestBed } from '@angular/core/testing';

import { ChildrenAuthGuard } from './children-auth.guard';

describe('ChildrenAuthGuard', () => {
  let guard: ChildrenAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildrenAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

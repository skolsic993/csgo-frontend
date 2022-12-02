import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendListSkeletonComponent } from './friend-list-skeleton.component';

describe('FriendListSkeletonComponent', () => {
  let component: FriendListSkeletonComponent;
  let fixture: ComponentFixture<FriendListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendListSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationsSkeletonComponent } from './user-informations-skeleton.component';

describe('UserInformationsSkeletonComponent', () => {
  let component: UserInformationsSkeletonComponent;
  let fixture: ComponentFixture<UserInformationsSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInformationsSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInformationsSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

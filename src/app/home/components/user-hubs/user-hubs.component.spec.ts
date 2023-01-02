import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHubsComponent } from './user-hubs.component';

describe('UserHubsComponent', () => {
  let component: UserHubsComponent;
  let fixture: ComponentFixture<UserHubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHubsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

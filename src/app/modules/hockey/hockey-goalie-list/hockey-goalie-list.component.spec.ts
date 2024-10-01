import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HockeyGoalieListComponent } from './hockey-goalie-list.component';

describe('HockeyGoalieListComponent', () => {
  let component: HockeyGoalieListComponent;
  let fixture: ComponentFixture<HockeyGoalieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HockeyGoalieListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HockeyGoalieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

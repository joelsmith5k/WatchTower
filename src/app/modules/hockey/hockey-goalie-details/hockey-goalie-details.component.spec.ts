import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HockeyGoalieDetailsComponent } from './hockey-goalie-details.component';

describe('HockeyGoalieDetailsComponent', () => {
  let component: HockeyGoalieDetailsComponent;
  let fixture: ComponentFixture<HockeyGoalieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HockeyGoalieDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HockeyGoalieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

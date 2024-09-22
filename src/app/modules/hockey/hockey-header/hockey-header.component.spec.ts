import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HockeyHeaderComponent } from './hockey-header.component';

describe('HockeyHeaderComponent', () => {
  let component: HockeyHeaderComponent;
  let fixture: ComponentFixture<HockeyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HockeyHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HockeyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

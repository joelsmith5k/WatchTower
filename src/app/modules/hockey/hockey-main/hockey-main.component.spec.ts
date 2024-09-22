import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HockeyMainComponent } from './hockey-main.component';

describe('HockeyMainComponent', () => {
  let component: HockeyMainComponent;
  let fixture: ComponentFixture<HockeyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HockeyMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HockeyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

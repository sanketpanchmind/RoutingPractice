import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayRegisterComponent } from './holiday-register.component';

describe('HolidayRegisterComponent', () => {
  let component: HolidayRegisterComponent;
  let fixture: ComponentFixture<HolidayRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolidayRegisterComponent]
    });
    fixture = TestBed.createComponent(HolidayRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

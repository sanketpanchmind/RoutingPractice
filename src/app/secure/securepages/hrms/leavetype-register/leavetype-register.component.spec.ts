import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavetypeRegisterComponent } from './leavetype-register.component';

describe('LeavetypeRegisterComponent', () => {
  let component: LeavetypeRegisterComponent;
  let fixture: ComponentFixture<LeavetypeRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeavetypeRegisterComponent]
    });
    fixture = TestBed.createComponent(LeavetypeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

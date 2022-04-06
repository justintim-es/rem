import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardedComponent } from './onboarded.component';

describe('OnboardedComponent', () => {
  let component: OnboardedComponent;
  let fixture: ComponentFixture<OnboardedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

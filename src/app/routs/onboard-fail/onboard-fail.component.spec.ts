import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardFailComponent } from './onboard-fail.component';

describe('OnboardFailComponent', () => {
  let component: OnboardFailComponent;
  let fixture: ComponentFixture<OnboardFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardFailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

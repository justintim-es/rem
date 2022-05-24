import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBuyButtonComponent } from './main-buy-button.component';

describe('MainBuyButtonComponent', () => {
  let component: MainBuyButtonComponent;
  let fixture: ComponentFixture<MainBuyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBuyButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBuyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

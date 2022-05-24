import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBuyComponent } from './main-buy.component';

describe('MainBuyComponent', () => {
  let component: MainBuyComponent;
  let fixture: ComponentFixture<MainBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

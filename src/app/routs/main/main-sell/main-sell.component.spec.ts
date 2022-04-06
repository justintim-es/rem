import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSellComponent } from './main-sell.component';

describe('MainSellComponent', () => {
  let component: MainSellComponent;
  let fixture: ComponentFixture<MainSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

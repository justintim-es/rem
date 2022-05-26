import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSellDeleteComponent } from './main-sell-delete.component';

describe('MainSellDeleteComponent', () => {
  let component: MainSellDeleteComponent;
  let fixture: ComponentFixture<MainSellDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSellDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSellDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

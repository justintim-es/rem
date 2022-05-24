import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBuyDefencesComponent } from './main-buy-defences.component';

describe('MainBuyDefencesComponent', () => {
  let component: MainBuyDefencesComponent;
  let fixture: ComponentFixture<MainBuyDefencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBuyDefencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBuyDefencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

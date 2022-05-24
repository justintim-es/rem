import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSellForComponent } from './main-sell-for.component';

describe('MainSellForComponent', () => {
  let component: MainSellForComponent;
  let fixture: ComponentFixture<MainSellForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSellForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSellForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

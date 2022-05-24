import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IschinComponent } from './ischin.component';

describe('IschinComponent', () => {
  let component: IschinComponent;
  let fixture: ComponentFixture<IschinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IschinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IschinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

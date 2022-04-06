import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { slide } from 'src/app/animations/animator';
import { IAction } from 'src/app/redux/combiner';
import { RDX_MAIN_SLIDE_RIGHT_ONE } from 'src/app/redux/main/actions';
import { getMainBottomState, getMainBottomValue, getMainIsBottom, getMainIsTop, getMainTopState, getMainTopValue } from 'src/app/redux/main/selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    slide
  ]
})
export class MainComponent implements OnInit {
  topValue: Observable<number>;
  bottomValue: Observable<number>;
  isTop: Observable<boolean>;
  isBottom: Observable<boolean>;
  topState: Observable<string>;
  bottomState: Observable<string>;
  constructor(
    private store: Store
  ) {
    this.topValue = this.store.select(getMainTopValue);
    this.bottomValue = this.store.select(getMainBottomValue);
    this.isTop = this.store.select(getMainIsTop);
    this.isBottom = this.store.select(getMainIsBottom);
    this.topState = this.store.select(getMainTopState);
    this.bottomState = this.store.select(getMainBottomState);
   }

  ngOnInit(): void {
  }
  slideRight(bottom: number) {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_SLIDE_RIGHT_ONE,
      payload: bottom, 
      component: 'component'
    })
  }
}

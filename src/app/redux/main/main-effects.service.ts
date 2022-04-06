import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map } from 'rxjs';
import { rdxMainSlideLeftOne, rdxMainSlideLeftTwo, rdxMainSlideRightOne, rdxMainSlideRightTwo, RDX_MAIN_SLIDE_LEFT_THREE, RDX_MAIN_SLIDE_LEFT_TWO, RDX_MAIN_SLIDE_RIGHT_THREE, RDX_MAIN_SLIDE_RIGHT_TWO } from './actions';

@Injectable({
  providedIn: 'root'
})
export class MainEffectsService {

  constructor(
    private actions: Actions
  ) { }
  
  slideRightOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSlideRightOne),
      delay(1),
      map(ac => {
        return {
          type: RDX_MAIN_SLIDE_RIGHT_TWO,
          component: ac.component
        } 
      })
    )
  })
  slideRightTwo = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSlideRightTwo),
      delay(500),
      map(ac => {
        return {
          type: RDX_MAIN_SLIDE_RIGHT_THREE,
          component: ac.component
        }
      })
    )
  })
  slideLeftOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSlideLeftOne),
      delay(1),
      map(ac => {
        return {
          type: RDX_MAIN_SLIDE_LEFT_TWO
        }
      })
    )
  })
  slideLeftTwo = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSlideLeftTwo),
      delay(500),
      map(ac => {
        return {
          type: RDX_MAIN_SLIDE_LEFT_THREE
        }
      })
    )
  })
}

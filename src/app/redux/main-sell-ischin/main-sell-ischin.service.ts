import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAction, IMainSellIschinFetchError } from '../combiner';
import { getTokenToken } from '../token/selector';
import { rdxMainSellIschinFetch, RDX_MAIN_SELL_ISCHIN_FETCH_ERROR, RDX_MAIN_SELL_ISCHIN_FETCH_SUCCESS } from './actions';
import { IMainSellIschinReducer } from './reducer';

@Injectable({
  providedIn: 'root'
})
export class MainSellIschinService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainSellIschinFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/api/sell/transfer-acc/' + ac[0].payload!.ischid, {
        to: ac[0].payload!.to,
        gla: ac[0].payload!.gla,
        unit: ac[0].payload!.unit,
      }, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        let reschet: IAction<any> = {
          type: RDX_MAIN_SELL_ISCHIN_FETCH_SUCCESS,
          payload: ac[0].payload!.index,
          component: ac[0].component
        };
        return reschet;
      }).catch((err: AxiosError) => {
        let reschet: IAction<IMainSellIschinFetchError> = {
          type: RDX_MAIN_SELL_ISCHIN_FETCH_ERROR,
          payload: {
            index: ac[0].payload!.index,
            message: err.response?.data
          },
          component: ac[0].component
        };
        return reschet;
      }
    )));
  });
}

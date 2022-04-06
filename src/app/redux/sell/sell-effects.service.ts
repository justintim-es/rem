import { Injectable } from '@angular/core';
import { rdxSellAccountFetch, RDX_SELL_ACCOUNT_FETCH_SUCCESS, RDX_SELL_ACCOUNT_FETCH_ERROR, rdxSellAccountSendEmail, RDX_SELL_ACCOUNT_SEND_EMAIL_SUCCESS, RDX_SELL_ACCOUNT_SEND_EMAIL_ERROR } from './actions';
import { getSellAccountId } from './selectors';
import { aschax } from '../../aschax';
import { Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { AxiosError} from 'axios';
@Injectable({
  providedIn: 'root'
})
export class SellEffectsService {

  constructor(
    private store: Store,
    private actions: Actions
  ) { }

  accountFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxSellAccountFetch),
      switchMap(ac => aschax.get('/api/create/new/' + ac.payload).then(res => {
        return {
          type: RDX_SELL_ACCOUNT_FETCH_SUCCESS,
          payload: res.data,
          component: ac.component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_SELL_ACCOUNT_FETCH_ERROR,
          payload: err.response?.data,
          component: ac.component
        }
      }))
    )
  })
  accountLinkFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxSellAccountSendEmail),
      withLatestFrom(this.store.select(getSellAccountId)),
      switchMap(ac => aschax.post('/api/create/send-email', {
        email: ac[0].payload!.email,
        password: ac[0].payload!.password,
        accountId: ac[1]
      }).then(res => {
        return {
          type: RDX_SELL_ACCOUNT_SEND_EMAIL_SUCCESS,
          payload: res.data,
          component: ac[0].component
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_SELL_ACCOUNT_SEND_EMAIL_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    )
  })
}

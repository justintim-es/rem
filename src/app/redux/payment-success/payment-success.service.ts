import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError } from 'axios';
import { map, switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAction } from '../combiner';
import { RDX_TOKEN_SET } from '../token/action';
import { rdxPaymentSuccessLogin, rdxPaymentSuccessLoginSuccess, rdxPaymentSuccessTransferSuccess, RDX_PAYMENT_SUCCESS_LOGIN_ERROR, RDX_PAYMENT_SUCCESS_LOGIN_SUCCESS, RDX_PAYMENT_SUCCESS_TRANSFER_ERROR, RDX_PAYMENT_SUCCESS_TRANSFER_SUCCESS } from './actions';
import { IPaymentSuccessLoginSuccess } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaymentSuccessService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {{}
    return this.actions.pipe(
      ofType(rdxPaymentSuccessLogin),
      switchMap(ac => aschax.post('/api/login', {
        email: ac.payload!.email,
        password: ac.payload.password
      }).then(res => {
        let reschet: IAction<IPaymentSuccessLoginSuccess> = {
          type: RDX_PAYMENT_SUCCESS_LOGIN_SUCCESS,
          payload: {
            sell: ac.payload!.sell,
            recognition: ac.payload!.recognition,
            token: res.data
          },
          component: ac.component
        }
        return reschet;
      }).catch((err: AxiosError) => {
        return {
          type: RDX_PAYMENT_SUCCESS_LOGIN_ERROR,
          payload: err.response?.data,
          component: ac.component
        }
      }))
    )
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxPaymentSuccessLoginSuccess),
      switchMap(ac => aschax.post('/api/payed/session-liber', {
        recognition: ac.payload!.recognition,
        sell: ac.payload!.sell,
      }, {
        headers: {
          'x-auth-token': ac.payload!.token
        }
      }).then(res => {
        return {
          type: RDX_PAYMENT_SUCCESS_TRANSFER_SUCCESS,
          payload: ac.payload!.token,
          component: ac.component
        };
      }).catch((err: AxiosError) => {
        return {
          type: RDX_PAYMENT_SUCCESS_TRANSFER_ERROR,
          payload: err.response?.data,
          component: ac.component
        }
      }))
    );
  })
  transferSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxPaymentSuccessTransferSuccess),
      map(ac => {
        return {
          type: RDX_TOKEN_SET,
          payload: ac.payload!
        }
      })
    );
  })
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import axios, { AxiosError } from 'axios';
import { mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IAction, IMainBuyFetchDefencesError, IMainBuyFetchDefencesSuccess, IMainBuyFetchRationem, IMainBuyFetchRationemSuccess, IMainBuyFetchSuccess, IMainBuyOfferDefence } from '../combiner';
import { getTokenToken } from '../token/selector';
import { rdxMainBuyFetch, rdxMainBuyFetchDefences, rdxMainBuyFetchRationem, rdxMainBuyFetchSuccess, RDX_MAIN_BUY_FETCH, RDX_MAIN_BUY_FETCH_DEFENCES, RDX_MAIN_BUY_FETCH_DEFENCES_ERROR, RDX_MAIN_BUY_FETCH_DEFENCES_SUCCESS, RDX_MAIN_BUY_FETCH_ERROR, RDX_MAIN_BUY_FETCH_RATIONEM, RDX_MAIN_BUY_FETCH_SUCCESS } from './actions';
@Injectable({
  providedIn: 'root'
})
export class MainBuyService {

  constructor(
    private store: Store,
    private actions: Actions
  ) { }
  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainBuyFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => axios.all([
        aschax.get('/api/buy/liber-price', {
          headers: {
            'x-auth-token': ac[1]
          }
        }),
        aschax.get('/api/buy/liber-average', {
          headers: {
            'x-auth-token': ac[1]
          }
        }),
        aschax.get('/api/buy/liber-gla', {
          headers: {
            'x-auth-token': ac[1]
          }
        }),
        aschax.get('/api/buy/fixum-price', {
          headers: {
            'x-auth-token': ac[1]
          }
        }),
        aschax.get('/api/buy/fixum-average', {
          headers: {
            'x-auth-token': ac[1]
          }
        }),
        aschax.get('/api/buy/fixum-gla', {
          headers: {
            'x-auth-token': ac[1]
          }
        }),
      ]).then(res => {
          let reschet: IAction<IMainBuyFetchSuccess> = {
            type: RDX_MAIN_BUY_FETCH_SUCCESS,
            payload: {
              lp: res[0].data,
              la: res[1].data,
              lg: res[2].data,
              fp: res[3].data,
              fa: res[4].data,
              fg: res[5].data
            },
            component: ac[0].component
          };
          return reschet;
      }).catch((err: AxiosError) => {
        let reschet: IAction<string> = {
          type: RDX_MAIN_BUY_FETCH_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        };
        return reschet;
      }))
    );
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainBuyFetchSuccess),
      mergeMap(ac => {
        let aschacs: IAction<IMainBuyFetchRationem>[] = [];
        for (let i = 0; i < ac.payload!.lp.length; i++) {
          aschacs.push({
            type: RDX_MAIN_BUY_FETCH_RATIONEM,
            payload: {
              index: i,
              rationem: ac.payload!.lp[i].rationemId,
              offer: 'offersLP'
            },
            component: ac.component
          });
        }
        for (let i = 0; i < ac.payload!.lg.length; i++) {
          aschacs.push({
            type: RDX_MAIN_BUY_FETCH_RATIONEM,
            payload: {
              index: i,
              rationem: ac.payload!.lg[i].rationemId,
              offer: 'offersLG'
            },
            component: ac.component
          });
        }
        for (let i = 0; i < ac.payload!.la.length; i++) {
          aschacs.push({
            type: RDX_MAIN_BUY_FETCH_RATIONEM,
            payload: {
              index: i,
              rationem: ac.payload!.la[i].rationemId,
              offer: 'offersLA'
            },
            component: ac.component
          });
        }
        return aschacs;
      })
    )
  })
  fetchRationem = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainBuyFetchRationem),
      withLatestFrom(this.store.select(getTokenToken)),
      mergeMap(ac => aschax.get('/api/sell/rationem/' + ac[0].payload!.rationem, {
        headers: {
          'x-auth-token': ac[1]
        }
      }).then(res => {
        let reschet: IAction<IMainBuyFetchRationemSuccess> = {
          type: RDX_MAIN_BUY_FETCH_DEFENCES,
          payload: {
            index: ac[0].payload!.index,
            rationemIndex: res.data.rationemIndex,
            gladiator: res.data.gladiator,
            offer: ac[0].payload!.offer,
          },
          component: ac[0].component
        }
        return reschet;
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_BUY_FETCH_DEFENCES_ERROR,
          payload: err.response?.data,
          component: ac[0].component
        }
      }))
    );
  })
  fetchDefences = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainBuyFetchDefences),
      withLatestFrom(this.store.select(getTokenToken)),
      mergeMap(ac => axios.all([
        aschax.get('/api/wallet/defensiones/true/' +  ac[0].payload!.rationemIndex + '/' + ac[0].payload!.gladiator, {
          headers: {
            'x-auth-token': ac[1]
          }
        }),
        aschax.get('/api/wallet/defensiones/false/' + ac[0].payload!.rationemIndex + '/' + ac[0].payload!.gladiator, {
          headers: {
            'x-auth-token': ac[1]
          }
        })
      ]).then(res => {
        let reschet: IAction<IMainBuyFetchDefencesSuccess> = {
          type: RDX_MAIN_BUY_FETCH_DEFENCES_SUCCESS,
          payload: {
           index: ac[0].payload!.index,
           liberDef: res[0].data,
           fixumDef: res[1].data,
           offer: ac[0].payload!.offer
          },
          component: ac[0].component
        }
        return reschet;
      }).catch((err: AxiosError) => {
        let reschet: IAction<IMainBuyFetchDefencesError> = {
          type: RDX_MAIN_BUY_FETCH_DEFENCES_ERROR,
          payload: {
            index: ac[0].payload!.index,
            message: err.response?.data
          },
          component: ac[0].component
        };
        return reschet;
      }))
    );
  })
}

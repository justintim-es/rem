import { createReducer, on } from "@ngrx/store";
import { List } from "immutable";
import { IMainBuyFetchSuccess, IMainBuyOffer, IMainBuyOfferDefence } from "../combiner";
import { rdxMainBuyFetch, rdxMainBuyFetchDefences, rdxMainBuyFetchDefencesSuccess, rdxMainBuyFetchError, rdxMainBuyFetchSuccess } from "./actions";

export interface IMainBuyReducer {
  isFetch: boolean;
  isFetchSuccess: boolean;
  isFetchError: boolean;
  fetchErrorMessage: string;
  offersLG: List<IMainBuyOffer>;
  offersLP: List<IMainBuyOffer>;
  offersLA: List<IMainBuyOffer>;
  offersFG: List<IMainBuyOffer>;
  offersFP: List<IMainBuyOffer>;
  offersFA: List<IMainBuyOffer>;
}
export const mainBuyInitial: IMainBuyReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  fetchErrorMessage: '',
  offersLG: List(),
  offersLP: List(),
  offersLA: List(),
  offersFG: List(),
  offersFP: List(),
  offersFA: List()
}
export const mainBuyReducer = createReducer(
  mainBuyInitial,
  on(rdxMainBuyFetch, (state: IMainBuyReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false,
    }
  }),
  on(rdxMainBuyFetchSuccess, (state: IMainBuyReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      offersFA: List(action.payload!.fa),
      offersFG: List(action.payload!.fg),
      offersFP: List(action.payload!.fp),
      offersLA: List(action.payload!.la),
      offersLG: List(action.payload!.lg),
      offersLP: List(action.payload!.lp)
    }
  }),
  on(rdxMainBuyFetchError, (state: IMainBuyReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchErrorMessage: action.payload!
    }
  }),
  // on(rdxMainBuyFetchDefencesSuccess, (state: IMainBuyReducer, action) => {
  //   switch(action.payload!.offer) {
  //     case 'offersLA': {
  //       let ldef: List<IMainBuyOfferDefence> = state.offersLA.getIn([action.payload!.index, 'liberDefences']) as Array<IMainBuyOfferDefence>;
  //       let fdef: List<IMainBuyOfferDefence> = state.offersLA.getIn([action.payload!.index, 'fixumDefences']) as <IMainBuyOfferDefence>;
  //       return {
  //         ...state,
  //         offerLA: state.offersLA.setIn([
  //           action.payload!.index,
  //           'fixumDefences'
  //         ], ldef.push(action.payload!.liberDef)).setIn([
  //           action.payload!.index,
  //           'liberDefences'
  //         ], fdef.push(action.payload!.fixumDef))
  //       };
  //     };
  //     case 'offersLG': {
  //       let ldef: IMainBuyOfferDefence[] = state.offersLG.getIn([action.payload!.index, 'liberDefences']) as Array<IMainBuyOfferDefence>;
  //       let fdef: IMainBuyOfferDefence[] = state.offersLG.getIn([action.payload!.index, 'fixumDefences']) as Array<IMainBuyOfferDefence>;
  //        return {
  //         ...state,
  //         offerLG: state.offersLG.setIn([
  //           action.payload!.index,
  //           'liberDefences'
  //         ], ldef.push(action.payload!.liberDef)).setIn([
  //           action.payload!.index,
  //           'fixumDefences'
  //         ], fdef.push(action.payload!.fixumDef))
  //       };
  //     };
  //     case 'offersLP': {
  //       let ldef: IMainBuyOfferDefence[] = state.offersLP.getIn([action.payload!.index, 'liberDefences']) as Array<IMainBuyOfferDefence>;
  //       let fdef: IMainBuyOfferDefence[] = state.offersLP.getIn([action.payload!.index, 'fixumDefences']) as Array<IMainBuyOfferDefence>;
  //       return {
  //         ...state,
  //         offersLP:
  //         state.offersLP.setIn([action.payload!.index, 'liberDefences'],
  //           ldef.push(action.payload!.liberDef)
  //         ).setIn([action.payload!.index, 'fixumDefences'],
  //           fdef.push(action.payload!.fixumDef)
  //         )
  //       }
  //     };
  //     default: return state;
  //   }
  // })
)

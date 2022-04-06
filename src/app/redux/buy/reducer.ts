import { createReducer, on } from "@ngrx/store";
import { rdxBuyFetch, rdxBuyFetchError, rdxBuyFetchSuccess, rdxBuyIsPleaseTrue } from "./actions";

export interface IBuyReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchErrorMessage: string;   
    isPlease: boolean;
}
export const buyInitial: IBuyReducer = {
    isFetch: false,
    isFetchSuccess: false,
    isFetchError: false,
    fetchErrorMessage: '',
    isPlease: false
}
export const buyReducer = createReducer(
    buyInitial,
    on(rdxBuyFetch, (state: IBuyReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            isFetchError: false,
            fetchErrorMessage: ''
        }
    }),
    on(rdxBuyFetchSuccess, (state: IBuyReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true
        }
    }),
    on(rdxBuyFetchError, (state: IBuyReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchError: true,
            fetchErrorMessage: action.payload!
        }
    }),
    on(rdxBuyIsPleaseTrue, (state: IBuyReducer) => {
        return {
            ...state,
            isPlease: true
        }
    })
)
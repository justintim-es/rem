import { createReducer, on } from "@ngrx/store";
import { rdxLoginFetch, rdxLoginFetchError, rdxLoginFetchSuccess, rdxLoginIsRouteThrough } from "./actions";

export interface ILoginReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchErrorMessage: string;
    isRouteThrough: boolean;
}
export const loginInitial: ILoginReducer = {
    isFetch: false,
    isFetchSuccess: false,
    isFetchError: false,
    fetchErrorMessage: '',
    isRouteThrough: false
}
export const loginReducer = createReducer(
    loginInitial,
    on(rdxLoginFetch, (state: ILoginReducer) => {
        return {
        ...state,
        isFetch: true,
        isFetchError: false,
        fetchErrorMessage: ''
       }
    }),
    on(rdxLoginFetchSuccess, (state: ILoginReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true
        }
    }),
    on(rdxLoginFetchError, (state: ILoginReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchError: true,
            fetchErrorMessage: action.payload!
        }
    }),
    on(rdxLoginIsRouteThrough, (state: ILoginReducer) => {
        return {
            ...state,
            isRouteThrough: true
        }
    })
)

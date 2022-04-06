import { createReducer, on } from "@ngrx/store";
import { rdxMainSlideRightOne, rdxMainSlideRightThree, rdxMainSlideRightTwo } from "./actions";

export interface IMainReducer {
    topState: string;
    isTop: boolean;
    topValue: number;
    bottomState: string;
    isBottom: boolean;
    bottomValue: number;
}
export const mainInitial: IMainReducer = {
    topState: 'invision',
    topValue: 2,
    isTop: true,
    bottomState: 'left', 
    isBottom: false,
    bottomValue: 0
}
export const mainReducer = createReducer(
    mainInitial,
    on(rdxMainSlideRightOne, (state: IMainReducer, action) => {
        return {
            ...state,
            topState: 'invision-absolute',
            isBottom: true,
            bottomValue: action.payload!
        }
    }),
    on(rdxMainSlideRightTwo, (state: IMainReducer) => {
        return {
            ...state,
            topState: 'right-absolute',
            bottomState: 'invision'
        }
    }),
    on(rdxMainSlideRightThree, (state: IMainReducer) => {
        return {
            ...state,
            topState: 'invision',
            topValue: state.bottomValue,
            isBottom: false,
            bottomState: 'left'
        }
    })
)
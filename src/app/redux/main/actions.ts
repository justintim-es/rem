import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";

export const RDX_MAIN_SLIDE_RIGHT_ONE = 'RDX_MAIN_SLIDE_RIGHT_ONE';
export const rdxMainSlideRightOne = createAction(RDX_MAIN_SLIDE_RIGHT_ONE, props<IActionCreator<any>>());
export const RDX_MAIN_SLIDE_RIGHT_TWO  = 'RDX_MAIN_SLIDE_RIGHT_TWO';
export const rdxMainSlideRightTwo = createAction(RDX_MAIN_SLIDE_RIGHT_TWO, props<IActionCreator<any>>());
export const RDX_MAIN_SLIDE_RIGHT_THREE = 'RDX_MAIN_SLIDE_RIGHT_THREE';
export const rdxMainSlideRightThree = createAction(RDX_MAIN_SLIDE_RIGHT_THREE, props<IActionCreator<any>>());
 
export const RDX_MAIN_SLIDE_LEFT_ONE = 'RDX_MAIN_SLIDE_LEFT_ONE';
export const rdxMainSlideLeftOne = createAction(RDX_MAIN_SLIDE_LEFT_ONE, props<IActionCreator<any>>());
export const RDX_MAIN_SLIDE_LEFT_TWO = 'RDX_MAIN_SLIDE_LEFT_TWO';
export const rdxMainSlideLeftTwo = createAction(RDX_MAIN_SLIDE_LEFT_TWO, props<IActionCreator<any>>());
export const RDX_MAIN_SLIDE_LEFT_THREE = 'RDX_MAIN_SLIDE_LEFT_THREE';
export const rdxMainSlideLeftThree = createAction(RDX_MAIN_SLIDE_LEFT_THREE, props<IActionCreator<any>>());
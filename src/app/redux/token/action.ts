import { createAction, props } from "@ngrx/store";
import { IActionCreator } from "../combiner";

export const RDX_TOKEN_SET = 'RDX_TOKEN_SET';
export const rdxTokenSet = createAction(RDX_TOKEN_SET, props<IActionCreator<string>>());

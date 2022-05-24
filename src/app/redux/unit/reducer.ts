import { createReducer } from "@ngrx/store";

export interface IUnitGla {
    value: string;
    key: string;
}
export interface IUnitReducer {
    gla: IUnitGla[];
}

export const unitInitial: IUnitReducer = {
    gla: [
      {
        value: '1000000000000000000000000000000000000000000000000000',
        key: 'GLA'
      },
      {
        value: '1000000000000000000000000000000000000000000000',
        key: 'GLAD'
      },
      {
        value: '1000000000000000000000000000000000000000',
        key: 'GLADI'
      },
      {
        value: '1000000000000000000000000000000000',
        key: 'GLADIA'
      },
      {
        value: '10000000000000000000000000000',
        key: 'GLADIAT'
      },
      {
        value: '1000000000000000000000',
        key: 'GLADIATO'
      },
      {
        value: '1000000000000000',
        key: 'GLADIATOR'
      },
      {
        value: '1000000000',
        key: 'GLADIATORS'
      },
      {
        value: '1000',
        key: 'GLADIATO.RS'
      },
      {
        value: '1',
        key: 'UNUS'
      }
    ]
};
export const unitReducer = createReducer(
  unitInitial,
)

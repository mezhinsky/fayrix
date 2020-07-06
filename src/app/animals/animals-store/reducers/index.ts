import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromCowsList from './cows-list.reducer';

export interface AnimalsState {
  cowsList: fromCowsList.CowsListState;
}

export const reducers: ActionReducerMap<AnimalsState> = {
  // @ts-ignore
  cowsList: fromCowsList.RtfReducer,
};

export const getAnimalsState = createFeatureSelector<AnimalsState>('animals');

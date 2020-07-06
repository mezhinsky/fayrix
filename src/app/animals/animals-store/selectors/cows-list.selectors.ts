import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromReducer from '../reducers/cows-list.reducer';

import { CowModel } from '../../models/cow.model';

export const getCompleteState = createSelector(
  fromFeature.getAnimalsState,
  (state: fromFeature.AnimalsState) => state.cowsList
);

export const getItems = createSelector(
  getCompleteState,
  fromReducer.getItems
);

export const getItemIds = createSelector(
  getCompleteState,
  fromReducer.getIds
);

export const getItemById = (id) => createSelector(
  getItems,
  (items) => items ? items[id] : {} as CowModel
);

export const getLoading = createSelector(
  getCompleteState,
  fromReducer.getLoading
);

export const getError = createSelector(
  getCompleteState,
  fromReducer.getError
);

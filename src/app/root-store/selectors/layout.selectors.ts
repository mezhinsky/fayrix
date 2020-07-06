import { createSelector } from '@ngrx/store';
import { getLayoutState } from '../reducers';
import * as fromLayout from '../reducers/layout.reducer';
import * as FromRoot from '../reducers';


export const getCompleteLayoutState = createSelector(
  getLayoutState, (state: fromLayout.LayoutState) => state
);

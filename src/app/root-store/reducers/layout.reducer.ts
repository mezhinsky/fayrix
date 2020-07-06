import * as layoutActions from '../actions/layout.actions';
import {state} from '@angular/animations';

export interface LayoutState {
  some: boolean;
}

export const initialState: LayoutState = {
  some: false,
};

export function layoutReducer(
  state = initialState,
  action: layoutActions.LayoutActions
): LayoutState {
  switch (action.type) {
    case layoutActions.BTN_PRESSED: {
      return {
        ...state,
        some: true,
      };
    }

    default:
      return state;
  }
}


export const getLayoutState = (state: LayoutState) => state;
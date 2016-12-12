import { Action } from '@ngrx/store';
import { fromJS } from 'immutable';

import { ADD_ANNOUNCEMENT, REMOVE_ANNOUNCEMENT } from '../actions/announcements.actions';
import { initialState } from '../store/announcements.store';

export const announcementsReducer = (
  state: any = initialState.get('announcements'),
  action: Action) => {
    switch (action.type) {
      case ADD_ANNOUNCEMENT:
        state = state.push(fromJS(action.payload));
        break;

      case REMOVE_ANNOUNCEMENT:
        state = (state.size)
          ? state.delete(state.keyOf(action.payload))
          : state;
        break;

      default:
        break;
  }
  return state;
};


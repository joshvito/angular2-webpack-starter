import { Action } from '@ngrx/store';
import { IAnnouncement } from '../announcements.model';
import {
  ADD_ANNOUNCEMENT, REMOVE_ANNOUNCEMENT
} from './announcements.actions';

export const AnnouncementsActions = {
  add(announcement: IAnnouncement): Action {
    return {
      payload: announcement,
      type: ADD_ANNOUNCEMENT
    };
  },

  remove(id: number): Action {
    return {
      payload: { id },
      type: REMOVE_ANNOUNCEMENT
    };
  },


};

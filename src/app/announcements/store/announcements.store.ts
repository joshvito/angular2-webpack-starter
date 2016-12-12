import { fromJS, Map } from 'immutable';

export const initialState: Map<string, Object> = fromJS({
  announcements: [],
  dateTime: ''
});

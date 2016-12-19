import { Inject, Injectable, Optional } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

import { AsyncService } from '../shared/async-services/base.async-service';
import { Model } from '../shared/models/base.model';
import { AnnouncementsActions } from './actions/announcements.action-creator';

interface IAnnouncement {
  title: string;
  body: string;
}

@Injectable()
class AnnouncementsModel extends Model {
  announcements$: Observable<any>;

  constructor (
    protected _store: Store<any>,
    @Optional() @Inject(AsyncService) _services: AsyncService[]) {
      super(_services || []);
      this.announcements$ = this._store.select('announcements');
  }

  add(announcement: IAnnouncement) {
    this._store.dispatch(AnnouncementsActions.add(announcement));
  }

  remove(announcement: IAnnouncement) {
    this._store.dispatch(AnnouncementsActions.remove(announcement));
  }

}
export { IAnnouncement, AnnouncementsModel };

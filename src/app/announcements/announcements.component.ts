// Exact copy except import UserService from core
import { Component, OnInit }      from '@angular/core';
import { IAnnouncement, AnnouncementsModel } from './announcements.model';

@Component({
  selector: 'app-announcemnts',
  template: require('./announcements.component.html')
})
export class AnnouncementsComponent {

  msg = 'Loading announcemnts ...';
  userName = '';

  constructor(
    private _model: AnnouncementsModel
  ) {
    this.userName = 'josh';
  }

  ngAfterViewInit() {
      this.msg = 'Loaded!';
  }

  addAnnouncement(announcement: IAnnouncement){
    this._model.add(announcement);
  }

}

// Exact copy except import UserService from core
import { Component, OnInit } from '@angular/core';
import { IAnnouncement, AnnouncementsModel } from './announcements.model';

@Component({
  selector: 'app-announcements',
  template: require('./announcements.component.html')
})
export class AnnouncementsComponent {
  titleInput: string = '';
  bodyTextArea: string = '';
  announcements: IAnnouncement[];

  constructor(
    private _model: AnnouncementsModel
  ) {}

  ngAfterViewInit() {

  }

  addAnnouncement(announcement: IAnnouncement) {
    this._model.add(announcement);
    this.titleInput = '';
    this.bodyTextArea = '';
  }

  removeAnnouncement(announcement: IAnnouncement) {
    this._model.remove(announcement);
  }

}

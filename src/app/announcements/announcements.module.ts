import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';
import { AnnouncementsRoutingModule } from './announcements-routing.module';
import { AnnouncementsComponent } from './announcements.component';
import { AnnouncementsModel } from './announcements.model';
import { provideStore } from '@ngrx/store';
import { announcementsReducer } from './reducers/announcements.reducer';

@NgModule({
  imports:      [ SharedModule, AnnouncementsRoutingModule ],
  declarations: [ AnnouncementsComponent ],
  exports:      [  ],
  providers: [AnnouncementsModel,
    provideStore({
      announcements: announcementsReducer}
  )]
})
export class AnnouncementsModule { }

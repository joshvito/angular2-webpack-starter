import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';
import { AnnouncementsRoutingModule } from './announcements-routing.module';
import { AnnouncementsComponent } from './announcements.component';
import { AnnouncementsModel } from './announcements.model';

@NgModule({
  imports:      [ SharedModule, AnnouncementsRoutingModule ],
  declarations: [ AnnouncementsComponent ],
  exports:      [  ],
  providers:    [ AnnouncementsModel ]
})
export class AnnouncementsModule { }

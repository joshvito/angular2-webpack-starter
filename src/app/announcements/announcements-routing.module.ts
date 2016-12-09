import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { AnnouncementsComponent }    from './announcements.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'announcements', component: AnnouncementsComponent }
  ])],
  exports: [RouterModule]
})
export class AnnouncementsRoutingModule {}

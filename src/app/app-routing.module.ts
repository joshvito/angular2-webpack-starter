import { Routes, RouterModule } from '@angular/router';
import { DataResolver } from './app.resolver';
import { NgModule }             from '@angular/core';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'announcements', pathMatch: 'full' }
  // { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// CoreModule is for the root app to import only.

import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }       from '@angular/core';
import { CommonModule }      from '@angular/common';
import { HttpModule } from '@angular/http';
// import { UserService }       from './user.service';
// import { UserService }       from './user.service';
// import { UserServiceConfig } from './user.service';



@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [  ],
  exports:      [  ]
  // providers:    [ UserService ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  // static forRoot(config: UserServiceConfig): ModuleWithProviders {
  //   return {
  //     ngModule: CoreModule,
  //     providers: [
  //       {provide: UserServiceConfig, useValue: config }
  //     ]
  //   };
  // }

 }

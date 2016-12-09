import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

// add shared components and services

@NgModule({
  imports:      [ CommonModule ],
  declarations: [  ],
  exports:      [ CommonModule, FormsModule ]
})
export class SharedModule { }

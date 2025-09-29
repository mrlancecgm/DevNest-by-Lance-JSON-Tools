import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Subheader } from './subheader/subheader';

@NgModule({
  declarations: [Header,Subheader],
  imports: [
    CommonModule
  ],
  exports: [Header,Subheader]
})
export class LayoutModule { }

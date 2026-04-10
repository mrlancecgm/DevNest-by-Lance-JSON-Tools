import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Subheader } from './subheader/subheader';
import { IconsModule } from '../core/feather-icon/icons/icons-module';

@NgModule({
  declarations: [Header,Subheader],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [Header,Subheader]
})
export class LayoutModule { }

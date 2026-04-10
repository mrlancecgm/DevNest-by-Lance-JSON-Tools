import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github, ChevronDown } from 'angular-feather/icons';

const icons = {
  ChevronDown
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }

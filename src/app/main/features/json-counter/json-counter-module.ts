import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PasteAndCount } from './paste-and-count/paste-and-count';
import { UploadAndCount } from './upload-and-count/upload-and-count';

const routes: Routes = [
  {
    path: 'paste-and-count',
    component: PasteAndCount
  },
  {
    path: 'upload-and-count',
    component: UploadAndCount
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JsonCounterModule { }

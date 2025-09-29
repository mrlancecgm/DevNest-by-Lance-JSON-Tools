import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.html',
  styleUrl: './subheader.scss',
  standalone: false,
})
export class Subheader {
  ngOnInit(){
    document.documentElement.style.setProperty('--subheaderPos','60px');
  }
}

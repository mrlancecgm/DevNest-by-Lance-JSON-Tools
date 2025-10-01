import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrl: './main.scss',
  imports: [CommonModule, RouterOutlet]
})
export class Main {

}

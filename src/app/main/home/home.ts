import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [CommonModule, RouterLink]
})
export class Home {

}

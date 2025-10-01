import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from './layout/layout-module';
import { Main } from './main/main';

@Component({
  selector: 'app-root',
  imports: [LayoutModule, Main],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('DevNest-by-Lance-JSON-Tools');
}

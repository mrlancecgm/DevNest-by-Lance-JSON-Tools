import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from './layout/layout-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('DevNest-by-Lance-JSON-Tools');
}

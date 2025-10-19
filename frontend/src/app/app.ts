import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LiveChartComponent } from './components/live-chart/live-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LiveChartComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend');
}

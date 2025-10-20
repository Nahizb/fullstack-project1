import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LiveChartComponent } from './live-chart/live-chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, LiveChartComponent],
  template: `
    <main class="home-container">
      <h1 class="title">Bienvenido a tu panel de sensores</h1>
      <p class="description">Este gráfico muestra los datos en tiempo real:</p>
      <app-live-chart></app-live-chart>
    </main>
  `,
  styles: [`
    .home-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      min-height: 100vh;
      padding: 2rem;
      background: linear-gradient(135deg, #e3edf7, #d0e1f9);
      color: #1c1c1c;
      font-family: 'Roboto', 'Segoe UI', sans-serif;
    }

    .title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #002b5c;
      font-weight: 700;
    }

    .description {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: #444444;
    }

    app-live-chart {
      width: 100%;
      max-width: 1000px;
      border-radius: 10px;
      background-color: #ffffff;
      padding: 1rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  `]
})

export class HomeComponent {}

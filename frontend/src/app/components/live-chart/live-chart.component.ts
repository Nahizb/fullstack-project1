import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { PLATFORM_ID } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-live-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule, FormsModule],
  templateUrl: './live-chart.component.html',
  styleUrls: ['./live-chart.component.css']
})
export class LiveChartComponent implements OnInit, OnDestroy {
  selectedSensor: string = 'Temperatura';
  sensors = ['Temperatura', 'Energía'];
  isBrowser: boolean;
  intervalId: any;

  // Un punto por minuto
  minuteData: { minute: string; sensor: string; value: number }[] = [];
  latestValue: number | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.intervalId = setInterval(() => this.updateMinutePoint(), 5000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  updateMinutePoint() {
    const now = new Date();
    const minuteKey = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    const newValue =
      this.selectedSensor === 'Temperatura'
        ? 20 + Math.random() * 5
        : 4 + Math.random() * 2;

    const existing = this.minuteData.find(
      d => d.minute === minuteKey && d.sensor === this.selectedSensor
    );

    if (existing) {
      existing.value = newValue; // actualiza el punto del minuto actual
    } else {
      this.minuteData.push({
        minute: minuteKey,
        sensor: this.selectedSensor,
        value: newValue
      });
    }

    this.latestValue = newValue;
  }

  get filteredData(): ChartConfiguration<'line'>['data']['datasets'] {
    const data = this.minuteData
      .filter(d => d.sensor === this.selectedSensor)
      .map(d => d.value);

    const unit = this.selectedSensor === 'Temperatura' ? '°C' : 'kWh';

    return [
      {
        data,
        label: `${this.selectedSensor} (${unit})`
      }
    ];
  }

  get chartLabels(): string[] {
    return this.minuteData
      .filter(d => d.sensor === this.selectedSensor)
      .map(d => d.minute); // eje X: HH:mm
  }

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    animation: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Hora (minuto exacto)'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Valor'
        }
      }
    }
  };
}

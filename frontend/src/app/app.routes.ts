import { Routes } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'chart',
    loadComponent: () => {
      const platformId = inject(PLATFORM_ID);
      return isPlatformBrowser(platformId)
        ? import('./components/live-chart/live-chart.component').then(m => m.LiveChartComponent)
        : import('./components/live-chart/empty.component').then(m => m.EmptyComponent);
    }
  }
];

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SensorData {
  time: string;
  temperature: number;
  energy: number;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private apiUrl = 'http://localhost:4000/api/data';

  constructor(private http: HttpClient) {}

  getSensorData(): Observable<SensorData> {
    return this.http.get<SensorData>(this.apiUrl);
  }
}

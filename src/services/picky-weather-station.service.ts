import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PickyWeatherStationService {
  getTemperature(city: string): Observable<number> {
    return of(42);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Geolocation } from './geolocation.service';

@Injectable({
  providedIn: 'root'
})
export class PickyWeatherStationService {

  constructor(private geolocation: Geolocation) {}

  // getTemperature(city: string): Observable<number> {
  //   return of(42);
  // }

  getTemperature(city: string) {
    return this.geolocation.getCoordinates(city)
      .pipe(map(coordinates => Math.round((coordinates.longitude + coordinates.latitude) / 2)));
  }
}

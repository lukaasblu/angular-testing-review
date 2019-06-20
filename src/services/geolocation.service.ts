import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NotImplementedError } from '../classes/not-implemented-error';

@Injectable({
  providedIn: 'root'
})
export class Geolocation {

  getCoordinates(city: string): Observable<Coordinates> {
    throw new NotImplementedError();
  }
}

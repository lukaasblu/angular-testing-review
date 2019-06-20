import { PickyWeatherStationService } from '../services/picky-weather-station.service';
import { TestBed, fakeAsync, flush } from '@angular/core/testing';
import { Geolocation } from '../services/geolocation.service';
import { of } from 'rxjs';

describe('PickyWeatherStation', () => {

  let geolocation: Geolocation;
  beforeEach(() => geolocation = TestBed.get(Geolocation));

  let weatherStation: PickyWeatherStationService;
  beforeEach(() => weatherStation = TestBed.get(PickyWeatherStationService));

  xit('should give temperature', fakeAsync(() => {
    let temperature;
    weatherStation.getTemperature('Tokyo')
      .subscribe(res => temperature = res);

    expect(temperature).toBe(42);
  }));

  it('should get random temperature', fakeAsync(() => {
    let temperature: number;

    const mockCoordinates: Coordinates = {
      latitude: 45.764043,
      longitude: 4.835659,
      accuracy: 0,
      speed: 0,
      altitude: 0,
      altitudeAccuracy: 0,
      heading: 0
    };

    spyOn(geolocation, 'getCoordinates').and.returnValue(of(mockCoordinates));

    weatherStation.getTemperature('Tokyo')
      .subscribe(res => temperature = res);

    flush();

    expect(temperature).toBe(25);

    expect(geolocation.getCoordinates).toHaveBeenCalledTimes(1);
    expect(geolocation.getCoordinates).toHaveBeenCalledWith('Tokyo');
  }));
});

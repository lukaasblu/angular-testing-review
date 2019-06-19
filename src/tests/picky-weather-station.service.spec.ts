import { PickyWeatherStationService } from '../services/picky-weather-station.service';
import { TestBed, fakeAsync } from '@angular/core/testing';

describe('PickyWeatherStation', () => {
  let weatherStation: PickyWeatherStationService;

  beforeEach(() => weatherStation = TestBed.get(PickyWeatherStationService));

  it('should give temperature', fakeAsync(() => {
    let temperature;
    weatherStation.getTemperature('Tokyo')
      .subscribe(res => temperature = res);

    expect(temperature).toBe(42);
  }));
});

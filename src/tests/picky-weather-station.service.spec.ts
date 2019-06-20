import { PickyWeatherStationService } from '../services/picky-weather-station.service';
import { TestBed, fakeAsync, flush, async } from '@angular/core/testing';
import { Geolocation } from '../services/geolocation.service';
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PickyWeatherStation', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  let geolocation: Geolocation;
  beforeEach(() => geolocation = TestBed.get(Geolocation));

  let weatherStation: PickyWeatherStationService;
  beforeEach(() => weatherStation = TestBed.get(PickyWeatherStationService));

  let httpTestingController: HttpTestingController;
  beforeEach(() => httpTestingController = TestBed.get(HttpTestingController));

  afterEach(() => {
    httpTestingController.verify();
  });

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

  it('should get temperature from API', fakeAsync(() => {
    let temperature: number;

    weatherStation.getTemperature('Tokyo')
      .subscribe(res => temperature = res);

    const req = httpTestingController.expectOne('/city-weather/tokyo');

    req.flush({ temperature: 30});

    expect(temperature).toEqual(30);
  }));
});

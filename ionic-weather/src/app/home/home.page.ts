import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public res: any;

  constructor(
    private weatherAPI: WeatherService
  ) {}

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherAPI.getWeatherData().subscribe((Response) => {
      this.res = Response;
      console.log(this.res);
      console.log("testing");
    });
      
  }

}

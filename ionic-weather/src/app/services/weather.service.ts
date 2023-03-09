import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
  ) { }

  getWeatherData(): Observable<any> {
    // let lat = ;
    // let lon = ;
    let city = 'Rabat';
    let apiId = 'TokenId';
    // let apiId = 'TokenId';
    let queryString = `https://api.weatherapi.com/v1/forecast.json?key=${apiId}&q=${city}&days=7&aqi=no&alerts=no`;
    // let queryString = `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${apiId}`
    return this.http.get(queryString);
    
  }
}

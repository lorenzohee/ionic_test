import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  constructor(private service: WeatherService) { }

  weather: object

  ngOnInit() {
  	this.service.getWeatherInfo().subscribe(
      res=>{
        this.weather = JSON.stringify(res);
      }
    )
  }

}

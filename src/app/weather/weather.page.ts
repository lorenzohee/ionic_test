import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  constructor(private service: WeatherService) { }

  weather: Weather

  ngOnInit() {
  	this.service.getWeatherInfo().subscribe(
      res=>{
        let forecast = res.data.forecast.map(function(item, key){
          item.high = item.high.replace(/[^0-9]/ig,"");
          item.low = item.low.replace(/[^0-9]/ig,"");
          return item;
        })
        res.data.forecast = forecast;
        this.weather = res;
      }
    )
  }

}

import { WeatherInfo } from './weather-info';
import { CityInfo } from './city-info';
export class Weather {
	cityInfo: CityInfo;
	data: {
		forecast: WeatherInfo[];
		ganmao: string;
		pm10: number;
		pm25: number;
		quality: string;
		shidu: string;
		wendu: string;
	};
	date: string;
	message: string;
	status: number;
	time: string;
}

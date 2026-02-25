export interface CurrentWeather {
  address: string;
  temp: number;
  conditions: string;
  humidity: number;
  windspeed: number;
  icon: string;
}

export interface DaysWeather {
  datetime: string;
  tempmin: number;
  tempmax: number;
  conditions: string;
  icon: string;
}

export interface WeatherData {
  currentConditions: CurrentWeather;
  days: DaysWeather[];
}

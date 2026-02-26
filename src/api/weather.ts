import axios from "axios";
import type { WeatherData, DaysWeather } from "../types/weatherTypes";

interface VisualCrossingResponse {
  resolvedAddress: string;
  currentConditions: {
    temp: number;
    conditions: string;
    humidity: number;
    windspeed: number;
    icon: string;
  };
  days: Array<{
    datetime: string;
    tempmin: number;
    tempmax: number;
    conditions: string;
    icon: string;
  }>;
}
const request = axios.create({
  baseURL:
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
});

request.interceptors.request.use(
  (config) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    config.params = { ...config.params, key: API_KEY };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
  },
);

export async function getWeather(city: string): Promise<WeatherData> {
  const res = await request<VisualCrossingResponse>({
    method: "GET",
    url: `${city}`,
    params: {
      unitGroup: "metric", // use metric unit
    },
  });

  const data = res as unknown as VisualCrossingResponse;

  return {
    currentConditions: {
      address: data.resolvedAddress,
      temp: data.currentConditions.temp,
      conditions: data.currentConditions.conditions,
      humidity: data.currentConditions.humidity,
      windspeed: data.currentConditions.windspeed,
      icon: data.currentConditions.icon,
    },
    days: data.days.map((day: DaysWeather) => ({
      datetime: day.datetime,
      tempmin: day.tempmin,
      tempmax: day.tempmax,
      conditions: day.conditions,
      icon: day.icon,
    })),
  };
}

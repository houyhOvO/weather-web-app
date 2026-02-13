import axios from 'axios'
import type { WeatherData, DaysWeather } from '../types/weatherTypes'

const request = axios.create({
  baseURL:
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/',
})

request.interceptors.request.use(
  (config) => {
    const API_KEY = import.meta.env.VITE_API_KEY
    config.params = { ...config.params, key: API_KEY }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log(error)
  },
)

export async function getWeather (city: string): Promise<WeatherData> {
  const res: any = await request({
    method: 'GET',
    url: `${city}`,
    params: {
      unitGroup: 'metric', // use metric unit
    },
  })

  return {
    currentConditions: {
      address: res.resolvedAddress,
      temp: res.currentConditions.temp,
      conditions: res.currentConditions.conditions,
      humidity: res.currentConditions.humidity,
      windspeed: res.currentConditions.windspeed,
      icon: res.currentConditions.icon,
    },
    days: res.days.map((day: DaysWeather) => ({
      datatime: day.datetime,
      temp: day.temp,
      conditions: day.conditions,
      icon: day.icon,
    })),
  }
}

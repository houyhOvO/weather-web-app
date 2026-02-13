import axios from 'axios'

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
    Promise.reject(error)
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

export const getWeather = (city: string) => {
  return request({
    method: 'GET',
    url: `${city}`,
    params: {
      unitGroup: 'metric', // use metric unit
    },
  })
}

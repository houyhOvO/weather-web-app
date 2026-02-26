import {
  Sun,
  Cloud,
  CloudRain,
  Snowflake,
  CloudFog,
  Wind,
  CloudSun,
  CloudMoon,
  Moon,
  CloudLightning,
} from "lucide-react";

export const WEATHER_ICONS = {
  "clear-day": { component: Sun, color: "text-orange-400" },
  "clear-night": { component: Moon, color: "text-slate-400" },
  rain: { component: CloudRain, color: "text-blue-400" },
  snow: { component: Snowflake, color: "text-blue-200" },
  sleet: { component: CloudRain, color: "text-cyan-300" },
  wind: { component: Wind, color: "text-slate-400" },
  fog: { component: CloudFog, color: "text-slate-300" },
  cloudy: { component: Cloud, color: "text-slate-400" },
  "partly-cloudy-day": { component: CloudSun, color: "text-orange-300" },
  "partly-cloudy-night": { component: CloudMoon, color: "text-slate-500" },
  thunderstorm: { component: CloudLightning, color: "text-purple-400" },
  "showers-day": { component: CloudRain, color: "text-blue-400" },
  "showers-night": { component: CloudRain, color: "text-blue-400" },
};

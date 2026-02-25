import type { DaysWeather } from "../types/weatherTypes";
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
  CircleHelp,
} from "lucide-react";

// 统一颜色映射表，与 SummaryCard 保持一致
const iconConfig: Record<string, { component: any; color: string }> = {
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

interface DaysWeatherProps {
  data: DaysWeather;
}

export function DaysWeatherCard({ data }: DaysWeatherProps) {
  if (!data) return null;

  const config = iconConfig[data.icon] || {
    component: CircleHelp,
    color: "text-slate-300",
  };
  const IconComponent = config.component;

  const dayName = new Date(data.datetime).toLocaleDateString("en-US", {
    weekday: "short",
  });

  const dateNum = new Date(data.datetime).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="flex flex-col items-center p-6 min-w-[130px] bg-white rounded-3xl shadow-lg border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="text-center mb-3">
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
          {dayName}
        </p>
        <p className="text-[10px] text-slate-300 font-medium">{dateNum}</p>
      </div>

      <div className="my-4">
        <IconComponent className={`${config.color} w-10 h-10`} />
      </div>

      <div className="text-center">
        <div className="text-2xl font-bold text-slate-800">
          {Math.round(data.tempmin)}°-{Math.round(data.tempmax)}°
        </div>
        <p className="text-[10px] text-slate-500 font-medium capitalize mt-1 line-clamp-1">
          {data.conditions}
        </p>
      </div>
    </div>
  );
}

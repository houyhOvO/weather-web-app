import type { DaysWeather } from "../types/weatherTypes";
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  CloudFog,
  Moon,
  CloudSun,
  CloudMoon,
  type LucideIcon,
} from "lucide-react";

// 定义图标映射表
const iconMap: Record<string, LucideIcon> = {
  "clear-day": Sun,
  "clear-night": Moon,
  rain: CloudRain,
  snow: CloudSnow,
  sleet: CloudRain, // 冰雹/雨夹雪
  wind: Wind,
  fog: CloudFog,
  cloudy: Cloud,
  "partly-cloudy-day": CloudSun,
  "partly-cloudy-night": CloudMoon,
  thunderstorm: CloudLightning,
  "showers-day": CloudRain,
  "showers-night": CloudRain,
};

const WeatherIcon = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const IconComponent = iconMap[name] || Cloud;
  return <IconComponent className={className} />;
};

interface DaysWeatherProps {
  data: DaysWeather;
}

export function DaysWeatherCard({ data }: DaysWeatherProps) {
  if (!data) return null;
  console.log("Current Data:", data);

  const dateObj = new Date(data.datetime);
  console.log("Parsed Date Object:", dateObj); // 如果这里是 Invalid Date，说明字符串格式不对
  const dayName = new Date(data.datetime).toLocaleDateString("en-US", {
    weekday: "short",
  });

  const dateNum = new Date(data.datetime).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="group flex flex-col items-center p-5 min-w-[110px] bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl transition-all duration-300">
      {/* 日期部分 */}
      <div className="text-center mb-4">
        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
          {dayName}
        </p>
        <p className="text-[10px] text-slate-500">{dateNum}</p>
      </div>

      {/* Lucide 图标 */}
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full group-hover:bg-blue-400/30 transition-colors" />
        <WeatherIcon
          name={data.icon}
          className="w-10 h-10 text-white relative z-10 drop-shadow-md"
        />
      </div>

      {/* 温度区间 */}
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold text-white tracking-tight">
          {Math.round(data.temp)}°
        </span>
        <span className="text-[10px] text-slate-400 mt-1 font-medium truncate max-w-[80px]">
          {data.conditions}
        </span>
      </div>
    </div>
  );
}

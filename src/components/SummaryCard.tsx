import {
  Cloud,
  Sun,
  Moon,
  CloudRain,
  Snowflake,
  CloudFog,
  Wind,
  CircleHelp,
} from "lucide-react";
import type { CurrentWeather } from "../types/weatherTypes";

const iconMap: Record<string, React.ReactNode> = {
  "clear-day": <Sun className="text-orange-400 w-16 h-16" />,
  "clear-night": <Moon className="text-slate-400 w-16 h-16" />,
  rain: <CloudRain className="text-blue-400 w-16 h-16" />,
  snow: <Snowflake className="text-blue-200 w-16 h-16" />,
  sleet: <CloudRain className="text-cyan-300 w-16 h-16" />,
  wind: <Wind className="text-slate-400 w-16 h-16" />,
  fog: <CloudFog className="text-slate-300 w-16 h-16" />,
  cloudy: <Cloud className="text-slate-400 w-16 h-16" />,
  "partly-cloudy-day": <Cloud className="text-orange-300 w-16 h-16" />,
  "partly-cloudy-night": <Cloud className="text-slate-500 w-16 h-16" />,
};
interface SummaryCardProps {
  data: CurrentWeather | null;
}

export function SummaryCard({ data }: SummaryCardProps) {
  if (!data) return null;
  // const current = data.currentConditions
  const WeatherIcon = iconMap[data.icon] || (
    <CircleHelp className="text-slate-300 w-16 h-16" />
  );

  return (
    <div className="w-full max-w-md p-8 rounded-3xl bg-white shadow-xl border border-slate-200">
      <div className="text-center">
        <h2 className="text-sm uppercase tracking-widest text-slate-500 font-semibold">
          {data.address}
        </h2>
        <div className="flex items-center justify-center gap-4 my-2">
          <div className="text-7xl font-bold text-slate-800">{data.temp}°C</div>
          <div className="flex items-center justify-center animate-bounce-slow">
            {WeatherIcon}
          </div>
        </div>

        <p className="text-xl text-slate-600 capitalize">{data.conditions}</p>
      </div>

      <div className="mt-8 pt-8 border-t border-slate-100 flex justify-around text-center">
        <div>
          <p className="text-xs text-slate-400 uppercase">Humidity</p>
          <p className="font-bold">{data.humidity}%</p>
        </div>
        <div>
          <p className="text-xs text-slate-400 uppercase">Wind</p>
          <p className="font-bold">{data.windspeed} km/h</p>
        </div>
      </div>
    </div>
  );
}

import { Github } from "lucide-react";

import "./App.css";
import { Header } from "./components/Header.tsx";
import { SummaryCard } from "./components/SummaryCard.tsx";
import { DaysWeatherCard } from "./components/DaysWeatherCard.tsx";
import { useState } from "react";
import type { WeatherData } from "./types/weatherTypes.ts";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-slate-50 p-8 gap-y-10">
      <a
        href="https://github.com/houyhOvO/weather-web-app" // 替换为你的仓库地址
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-6 right-6 z-50 p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-md text-slate-600 hover:text-slate-900 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        aria-label="View source on GitHub"
      >
        <Github className="w-6 h-6" />
      </a>
      <Header onSearchSuccess={(data) => setWeatherData(data)} />
      <SummaryCard data={weatherData?.currentConditions || null} />
      <div className="flex gap-4 overflow-x-auto w-full max-w-4xl pb-4">
        {weatherData?.days.map((day) => (
          <DaysWeatherCard key={day.datetime} data={day} />
        ))}
      </div>
    </div>
  );
}

export default App;

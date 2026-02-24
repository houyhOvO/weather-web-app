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

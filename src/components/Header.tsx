import { getWeather } from "../api/weather.ts";
import { useState } from "react";
import type { WeatherData } from "../types/weatherTypes.ts";

interface HeaderProps {
  onSearchSuccess: (data: WeatherData) => void;
}

export function Header({ onSearchSuccess }: HeaderProps) {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) return;

    try {
      const data = await getWeather(city);
      onSearchSuccess(data);
      // console.log(data);
    } catch (error: unknown) {
      console.error(error);
      alert("Could not find weather of the city :(");
    }
  };
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent pb-2">
        Weather Forecast
      </h1>
      <div className="flex w-full max-w-md mx-auto rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all overflow-hidden">
        <input
          className="flex-1 px-3 py-2 focus:outline-none"
          placeholder="Enter City..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          className="px-6 py-2 bg-blue-500 text-white font-medium hover:bg-blue-700 transition-colors"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

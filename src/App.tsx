import './App.css'
import {Header} from "./components/Header.tsx";
import {SummaryCard} from "./components/SummaryCard.tsx";
import {useState} from "react";

function App() {
  const[summaryWeatherData, setSummaryWeatherData] = useState<any>(null)
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-slate-50 p-8 gap-y-10">
      <Header onSearchSuccess={(data) => setSummaryWeatherData(data)} />
      <SummaryCard data={summaryWeatherData}/>
    </div>
  )
}

export default App

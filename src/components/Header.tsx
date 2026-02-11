export function Header() {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent pb-2">
        Weather Forecast
      </h1>
      <div className="flex w-full max-w-md mx-auto rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all overflow-hidden">
        <input
          className="flex-1 px-3 py-2 focus:outline-none"
          placeholder="Enter City..."
        />
        <button className="px-6 py-2 bg-blue-500 text-white font-medium hover:bg-blue-700 transition-colors">
          Search
        </button>
      </div>
    </div>
  )
}

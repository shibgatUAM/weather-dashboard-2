import { createContext, useContext } from 'react';

const WeatherContext = createContext(null);

export function useWeatherContext() {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }

  return context;
}

export { WeatherContext };

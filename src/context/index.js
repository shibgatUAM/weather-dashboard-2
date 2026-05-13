import { createContext, useContext } from 'react';

const WeatherContext = createContext(null);
const FavouriteContext = createContext(null);

function useWeatherContext() {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }

  return context;
}

function useFavouriteContext() {
  const context = useContext(FavouriteContext);

  if (!context) {
    throw new Error(
      'useFavouriteContext must be used within a FavouriteProvider',
    );
  }

  return context;
}

export {
  FavouriteContext,
  useFavouriteContext,
  useWeatherContext,
  WeatherContext,
};

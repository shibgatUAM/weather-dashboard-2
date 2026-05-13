import Page from './Page';
import { FavouriteProvider, WeatherProvider } from './provider';

export default function App() {
  return (
    <>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </>
  );
}

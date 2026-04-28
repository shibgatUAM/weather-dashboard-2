import Page from './Page';
import WeatherProvider from './provider/WeatherProvider';

export default function App() {
  return (
    <>
      <WeatherProvider>
        <Page />
      </WeatherProvider>
    </>
  );
}

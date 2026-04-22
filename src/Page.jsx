import Header from './components/header/Header';
import WeatherBoard from './components/weather/WeatherBoard';

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center pt-28 md:pt-36 px-4 pb-12">
        <section>
          <WeatherBoard />
        </section>
      </main>
    </>
  );
}

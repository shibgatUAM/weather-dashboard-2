import Header from './components/header/Header';
import WeatherBoard from './components/weather/WeatherBoard';
import { useWeatherContext } from './context';

export default function Page() {
  const { loading } = useWeatherContext();

  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md w-96 p-8 mt-14 mx-auto">
          <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <>
          <Header />
          <main className="flex justify-center items-center pt-28 md:pt-36 px-4 pb-12">
            <section>
              <WeatherBoard />
            </section>
          </main>
        </>
      )}
    </>
  );
}

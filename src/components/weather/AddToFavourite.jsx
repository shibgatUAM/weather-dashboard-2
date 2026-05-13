import { useEffect, useState } from 'react';
import RedHeartImage from '../../assets/heart-red.svg';
import HeartImage from '../../assets/heart.svg';
import { useFavouriteContext, useWeatherContext } from '../../context';

export default function AddToFavourite() {
  const { favourites, addToFavourites, removeFromFavourites } =
    useFavouriteContext();

  const { weatherData } = useWeatherContext();
  const { latitude, longitude, location } = weatherData;

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsFavourite(found);
  }, []);

  const handleFavourites = () => {
    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }

    setIsFavourite(!isFavourite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavourites}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] cursor-pointer"
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeartImage : HeartImage} alt="" />
        </button>
      </div>
    </div>
  );
}

import { useFavouriteContext } from '../../context';

export default function FavouriteListModal() {
  const { favourites } = useFavouriteContext();

  return (
    <div className="max-w-xs py-4 bg-white rounded-md border border-gray-200 absolute right-0 top-16 text-black shadow-lg z-50">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>

      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourites.length > 0 ? (
          favourites.map((fav) => (
            <li
              key={fav.location}
              className="hover:bg-gray-100 transition-colors"
            >
              {fav.location}
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-sm cursor-default">
            Nothing is added
          </li>
        )}
      </ul>
    </div>
  );
}

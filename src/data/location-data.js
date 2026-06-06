const data = [
  {
    location: 'London',
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: 'Kolkata',
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: 'Dhaka',
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: 'Singapore',
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: 'New York',
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: 'Toronto',
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: 'Tokyo',
    latitude: 35.6761919,
    longitude: 139.6503106,
  },
  {
    location: 'Dubai',
    latitude: 25.2048493,
    longitude: 55.2707828,
  },
  {
    location: 'Sydney',
    latitude: -33.8688197,
    longitude: 151.2092955,
  },
  {
    location: 'Paris',
    latitude: 48.856614,
    longitude: 2.3522219,
  },
  {
    location: 'Mumbai',
    latitude: 19.0760085,
    longitude: 72.8776559,
  },
  {
    location: 'Riyadh',
    latitude: 24.7135517,
    longitude: 46.6752957,
  },
  {
    location: 'Kuala Lumpur',
    latitude: 3.140853,
    longitude: 101.693207,
  },
  {
    location: 'Bangkok',
    latitude: 13.7563309,
    longitude: 100.5017651,
  },
  {
    location: 'Berlin',
    latitude: 52.5200066,
    longitude: 13.404954,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const foundLocation = data.find(
    (item) => item.location.toLowerCase() === location.trim().toLowerCase(),
  );

  return foundLocation ?? { location: '', latitude: 0, longitude: 0 };
}

export { getLocationByName, getLocations };

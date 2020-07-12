## Weather App with React/Redux
This application uses React and Redux to fetch and display weather data pulled from the OpenWeatherMap (OWM) API (https://openweathermap.org/).

If you wish to use this app, you will need to subscribe to OWM (https://openweathermap.org/guide) and insert your own API key into the /src/config/config.js.example file where indicated and then save that file as config.js in the same location.

## Usage
1. Clone the repo.
2. Run `npm install` from the root of the codebase.
3. Modify the src/config/config.js.example file to include your OWM API key. Save it as config.js in the same location.
4. Run `npm start` from the root to spin up a local development server viewable at http://localhost:3000.
5. Search for locations in the United States by entering a valid zip code.
6. Search for locations outside the United States by entering a valid zip code followed by a comma and then the country code (e.g. 75001, FR).
7. `npm run-script build` will generate the static files for deployment.
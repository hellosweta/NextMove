# Backend

NextMoveSF runs on Ruby on Rails and is hosted on Heroku. The backend provides RESTful APIs and responds to frontend requests with JSON data. The primary duty of the backend is to communicate with external API's that do not accept client-side requests.

# Frontend

NextMoveSF utilizes the React.js framework and follows Flux architecture to deliver a clean, efficient user experience.

## Leaflet.js

Leaflet.js was used to generate the lightweight and mobile-friendly map. The library's heat mapping tools were leveraged to dynamically update the mapped datasets in response to state changes initiated by the user. Leaflet's tools were customized in order to provide a simple drag-and-drop UI for interacting with multiple map overlays that we created.

## D3.js

D3.js was used to create the data visualizations for smaller areas (0.25 mile radius) chosen by the user. We set up a connection between the Leaflet map and the D3 visualization charts so that the user may click anywhere on the map to see a more detailed breakdown of the data within a 0.25 mile radius of that spot. The charts are responsive to user engagement and dynamically update in response to 

## External API's

The external API's used in this project were Socrata, BART.gov, SFMTA, Google Places, and Yelp Fusion. Socrata was used to access the enormous stores of open source data aggregated by SF OpenData. Custom SQL queries were crafted to parse the large body of crime and restaurant results returned by SF OpenData's responses.

## npm

Node package manager (npm) installs and manages all frontend dependencies.

A post-install script is configured so that webpack bundles all of the frontend files after the deployment to Heroku is complete.

## Webpack

Webpack conveniently bundles all of the frontend components. The bundled file is located in /app/assets/javascripts and included in the main application.js file.

## React & Flux

All of the React components, Flux action creators, API utilities, reducers, and stores are located in the [frontend](../frontend) directory.

## Babel Transpiling

NextMoveSF was written in ES6 javascript. Babel is used to convert all jsx and ES6 javascript to ES5 syntax, ensuring that legacy browsers may run the site without issue.

## jQuery

jQuery is used to make AJAX requests to external API's that accept client-side requests, and to route AJAX requests through the backend for external API's that require server-side requests. Additionally, jQuery is used for dynamic DOM manipulation in response to user interactions.

## Sass

Site styling was done with Sass for modern CSS styling capabilities.

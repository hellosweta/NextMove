# Backend

NextMoveSF runs on Ruby on Rails and is hosted on Heroku. The backend provides RESTful APIs and responds to frontend requests with JSON data. The primary duty of the backend is to communicate with external API's that do not accept client-side requests.

# Frontend

NextMoveSF utilizes the React.js framework and follows Flux architecture to deliver a clean, efficient user experience.

## Leaflet.js

Leaflet.js and Mapbox were used to generate the lightweight and mobile-friendly map. These open-source tools allowed full customization of the map, while the react-leaflet node package was used to connect it to the React state. Additionally, the Leaflet.heat plugin was leveraged in order to layer multiple heat maps simultaneously according to React state changes initiated by the user. All of these features are accessed via a simple drag-and-drop UI that permit quick and intuitive engagement with the map's features.

## D3.js

D3.js was used to create detailed data visualizations for smaller areas chosen by the user. Clicks on the map initiate AJAX calls to external API's that fetch more detailed data for that spot. The d3act package was used to connect the charts to the React state so that they dynamically update in response to state changes effected by incoming data streams.

Additionally, d3act was used to create, update, and destroy SVG elements directly within the DOM. Functional linking to the charts was accomplished by edits to the d3act source code, such as integration with the React Router and adding the ability to change hashHistory in response to events originating from within the D3 charts themselves.

## External API's

The external API's used in this project were Socrata, BART.gov, SFMTA, Google Places, and Yelp Fusion. Socrata was used to access the enormous stores of open source data aggregated by SF OpenData. Custom SQL queries were crafted to parse the large body of crime and restaurant results returned by SF OpenData's responses.

## React DnD

React DnD was used to implement the drag-and-drop UI in the map's sidebar. Drag events effected by the user dispatch actions to the store in order to update the datasets rendered on the heat map.

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

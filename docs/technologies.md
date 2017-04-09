# Backend

NextMoveSF runs on Ruby on Rails and is hosted on Heroku. The backend provides RESTful APIs and responds to frontend requests with JSON data. The primary duty of the backend is to communicate with external API's that do not accept client-side requests.

# Frontend

NextMoveSF utilizes the React.js framework and follows Flux architecture to deliver a clean, efficient user experience.

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

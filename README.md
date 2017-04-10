# NextMoveSF

[NextMoveSF][nextmovesf] is a data visualization tool that helps people find the San Francisco neighborhood that's right for them. Users choose their criteria and NextMoveSF displays a heat map of spots that match their preferences. It utilizes React.js with a Redux implementation of Flux architecture on the frontend, and Ruby on Rails on the backend.

![Map][map]

## Features

+ Interactive heatmapping of various types of data (i.e. crime, restaurants, transit)
+ Engagement with realtime data from SF OpenData, Google Places, and Yelp
+ Efficient communication with multiple external API's including Socrata, BART.gov, SFMTA, Google Places, and Yelp Fusion
+ Additional data visualization charts and detailed breakdown for localized radius searches

![Data Charts][data-charts]

## Project Design

NextMoveSF was designed and built in one week by Sweta Sanghavi, Bruk Argaw, Joe Seiden, and Daniel Fletcher.

A [proposal][proposal] was drafted to help provide an implementation timeline during the development process.

Alongside the design proposal, a [component hierarchy][components] and a series of [wireframes][wireframes] were prepared to guide the project's development.

## Technology

NextMoveSF is a single-page application built on Rails and React.js.

+ [Frontend and backend technologies][technologies]

## Future Directions

+ Migration of the backend from Rails to a more lightweight framework like Node.js.
+ Addition of more criteria such as Nightlife, Cost of Living, Microclimates, and access to Nature Areas.
+ Addition of more D3 visualization charts, such as pie charts or word clouds.
+ Scraping data for criteria that may not have existing API's (i.e., NextDoor, Craigslist)

[nextmovesf]: https://www.nextmovesf.info
[proposal]: ./docs/README.md
[components]: ./docs/component-hierarchy.md
[wireframes]: ./docs/wireframes
[technologies]: ./docs/technologies.md
[map]: ./docs/screenshots/map.png
[data-charts]: ./docs/screenshots/location_breakdown.png

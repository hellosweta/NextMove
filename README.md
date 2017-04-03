# NextMove

[Live Version](www.github.com)

### Background

Moving sucks. With NextMove it doesn't have to. NextMove lets users rank their criteria for a new neighborhood to live in, and displays a heatmap of San Francisco depicting 'hotspots' that match their preferences (i.e., number of restaurants in walking distance).

Once users identify hotspots of interest, they can view and interact with data visualizations about that area.

### Functionality & MVP

NextMove is a single page web application built using React/Redux. By the end of Week 11, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation and sufficient CSS styling:

- [ ] Hosting on GitHub Pages
- [ ] Display crime data on heatmap from the SpotCrime API
- [ ] Display restaurants data on heatmap from the Yelp API
- [ ] Display transit stop density on heatmap from the BART and SFMTA API
- [ ] Display a 'show' page when a user clicks on certain area with more in depth data visualizations which pulls information about:
  - [ ] transit stops from the Google Places Nearby Search API
  - [ ] restaurants from the Yelp API
  - [ ] crime from the SportCrime API
- [ ] Production README

### Design Docs

[Wireframes](./docs/wireframes)
[Component Hierarchy](./docs/component_hierarchy.md)
[API Endpoints](./docs/api_endpoints.md)

### Technologies & Technical Challenges

This web application will be implemented using: JavaScript, HTML, CSS,  React, and Redux.

The primary technical challenges will be:

- Efficiently communicating with multiple external APIs, including SpotCrime, Google Places, Yelp, BART, and SFMTA
- Writing an algorithm that integrates multiple datasets into one overall favorability score for each geographic coordinate
- Using Leaflet.js to display interactive heatmap of favorability scores
- Using D3.js to aggregate data within a .25 mile radius, and render intuitive data visualizations of relevant category

### Group Members & Work Breakdown

Our group consists of four members, Sweta Sanghavi, Daniel Fletcher, Bruk Argaw, and Joe Seiden.

Sweta's primary responsibilities will be:
- Researching & implementing the ability to render interactive maps with Leaflet
- Integrating data with Leaflet map
- Sidebar component

Daniel's primary responsibilities will be:
- Redux Cycle for all crime data for Map Container
- Redux Cycle for filtered crime for Crime Detail Container
- Design favorability scoring algorithm
- Redux Cycle for all transit data for Map Container

Joe's primary responsibilities will be:
- Redux Cycle for all Restaurants for Map Container
- Redux Cycle for filtered restaurants for Restaurant Detail Container  
- Design favorability scoring algorithm
- Redux Cycle for filtered transit data for Transit Detail Container

Bruk's primary responsibilities will be:
- Data visualizations with d3.js library
- Sidebar component

### Implementation Timeline

**Day 1 & 2**
+ Sweta: Get Leaflet map rendered on page.
+ Bruk: Tutorial for D3. Get bubble chart rendered on page.
+ Joe: Complete Redux cycle (minus components render method) for all restaurants, and filtered restaurants.
+ Daniel: Complete Redux cycle (minus components render method) for all crimes, and filtered crimes.

**Day 3 & 4**
+ Sweta: Figure out how to display dataset as heatmap on Leaflet map.
+ Bruk: Bar graphs and/or other chart types.
+ Joe & Daniel: Design favorability algorithm.
+ Daniel: Begin Redux cycle (minus components render method) for all transit stops.
+ Joe: Begin Redux cycle (minus components render method) for filtered transit stops.

**Day 5**
+ Sweta, Joe, and Daniel: Integrate our data with heatmapping.
+ Bruk, Joe, and Daniel: Integrate our data with charts visualizers.

### Future Direction
- Mobile responsiveness
- Add additional filters including microclimate, proximity to nature, access to food, access to healthcare, noise pollution, walkability, cultural attractions, nightlife, and parking
- Additional data visualizations for specific categories and/or location detail page
- Scraping data for datasets without existing API (i.e., NextDoor, Craigslist)
- Allowing other developers to upload additional datasets to NextMove and generate custom heatmap

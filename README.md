# NextMove

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

### Background

Moving sucks. With NextMove it doesn't have to. NextMove lets users view a heatmap of San Francisco depicting 'hotspots' with a high density of data points they care about (i.e., number of restaurants in walking distance).

NextMove additionally provides an interactive visualization of relevant data about a user specified area.

### Functionality & MVP

NextMove is a web application built using React/Redux. By the end of Week 11, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] Display crime data on heatmap from the CrimeSpot API
- [ ] Display restaurants data on heatmap from the Google Places API
- [ ] Display transit stop density on heatmap from the Google Places API
- [ ] Display a 'show' page when a user clicks on certain area with more in depth data visualizations
- [ ] Production README [sample](docs/production_readme.md)

### Technologies & Technical Challenges

This web application will be implemented using: JavaScript, HTML, CSS< React, and Redux.

The primary technical challenges will be:

- Efficiently making API calls to render an interactive heatmap that is inter
<!-- - Determining which grey scale tone corresponds to each color -- this will be different depending on whether the user requires high contrast or not
- Determining which high-contrast colors should be used to replace the existing colors, when the extension is in high contrast color mode

The colors will be identified by mapping classes in the DOM to a variety of attributes in the CSS such as `color`, `background-color`, and perhaps others.  Going from color to grey scale will be done with a standard algorithm.  Going from color to high-contrast color will be more challenging: currently, I plan to utilize a subset of high-contrast colors and map the given colors via some distance algorithm to the best match for these colors. -->

### Group Members & Work Breakdown

Our group consists of four members, Sweta Sanghavi, Daniel Fletcher, Bruk Argaw, and Joe Seiden.

Sweta's primary responsibilities will be:

- Researching & implementing the ability to render interactive maps with Leaflet
-

Ryan's primary responsibilites will be:

- Researching and setting up the Chrome extension infrastructure
- Producing the new HTML file with new colors
- Creating the algorithm to correctly identify gray-scale alternatives
- Creating the Settings page
- Writing the repo's README, complete with screenshots and code snippets
### Future
- Add additional APIs integration including  
- Also display housing listings in relevant areas by integrating with Craiglist....
- Scraping data from NextDoor and creating a node package to provide data
- Allowing custom API intergration

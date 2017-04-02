# NextMove

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

### Background

Moving sucks. With NextMove it doesn't have to. NextMove lets users view a heatmap of San Francisco depicting 'hotspots' with a high density of data points they care about (i.e., number of restaurants in walking distance).

Users will

Colorblindness and other visual impairments can make the internet difficult to use.  This Chrome extension will replace colors with appropriately contrasted colors or contrasted grey scale, depending on the user's settings.  Additionally, it will add underline to links on the page, in case links are delineated only by color.

Developers and designers may also be interested in knowing how colors affect visually impaired users. This extension will provide features that simulate colorblindness of varying degrees so that professionals can see how these users are experiencing their site.

Development of the features in this extension will be guided by [Usability.gov](https://www.usability.gov/get-involved/blog/2010/02/color-blindness.html), [99Designs](https://99designs.com/blog/tips/designers-need-to-understand-color-blindness/), and [We Are Colorblind](http://wearecolorblind.com).

### Minimum Viable Product

FresherNote is a web application inspired by Evernote built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Notes
- [ ] Notebooks for organizing notes
- [ ] Tags
- [ ] Rich Text Editing
- [ ] Infinite Scroll
- [ ] Production README [sample](docs/production_readme.md)

### Functionality & MVP

With this extension, users will be able to:

- [ ] Convert all colors on a webpage to high-contrast gray scale,
- [ ] Toggle the link underliner,
- [ ] Convert all colors to high-contrast,
- [ ] Convert all colors to grey scale as a totally colorblind user would see it,
- [ ] Convert all colors to low-contrast, as a mildly colorblind user would see it.


### Technologies & Technical Challenges

This extension will be implemented using the standard Chrome extension technology: JavaScript, HTML, and CSS.  In addition to the `manifest.json` and `package.json` files, there will be two scripts:

- `content.js`: will contain the logic for finding and recoloring elements in the DOM
- `options.js`: will contain the logic for changing the user's settings

There will also be two HTML files to display the content:

- `new_style.css`: the file containing the styling rules for recoloring
- `options.html`: the file that renders the Settings menu for the user

The primary technical challenges will be:

- Identifying all the colors used on the DOM elements,
- Determining which grey scale tone corresponds to each color -- this will be different depending on whether the user requires high contrast or not
- Determining which high-contrast colors should be used to replace the existing colors, when the extension is in high contrast color mode

The colors will be identified by mapping classes in the DOM to a variety of attributes in the CSS such as `color`, `background-color`, and perhaps others.  Going from color to grey scale will be done with a standard algorithm.  Going from color to high-contrast color will be more challenging: currently, I plan to utilize a subset of high-contrast colors and map the given colors via some distance algorithm to the best match for these colors.

### Group Members & Work Breakdown

Our group consists of two members, Munyo Frey and Ryan Hall.

Munyo's primary responsibilities will be:

- Researching & implementing the ability to locate and alter DOM elements
- Creating the functionality to identify all colors based on the CSS file
- Writing the algorithm to correctly identify high-contrast alternatives
- Creating the Chrome store page & marketing the app

Ryan's primary responsibilites will be:

- Researching and setting up the Chrome extension infrastructure
- Producing the new HTML file with new colors
- Creating the algorithm to correctly identify gray-scale alternatives
- Creating the Settings page
- Writing the repo's README, complete with screenshots and code snippets
### Future
- Add additional APIs including
- 

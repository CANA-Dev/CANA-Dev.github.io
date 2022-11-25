# Overview

This document will go over each and every aspect of the Application to give you a better understanding of what is in
this folder. I have also commented the entire code-base, going into more detail regarding individual
methods/components/variables.

# React/Node/JavaScript

This project is written in a language called JavaScript, you can find the full JavaScript
Documentation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript). It would be too complicated to teach
JavaScript on this document, but you just need to know that it's a Scripting Language
(code). On top of Javascript, we have two libraries: Node; and on top of Node, React.

Node is a general JS (JavaScript) framework, which allows importing and sharing of Libraries, and is highly used in
Web-Development. It includes the notions of, well, Libraries, and Node-Scripts (```yarn start```, etc...). You can find
the Node Documentation [here](https://nodejs.org/en/docs/).

React is a Node Library that helps us render our Code onto a displayable Website, it holds some core functionality,
include the notion of a "Component". You can find the React
Documentation [here](https://reactjs.org/docs/getting-started.html).

# Create-React-App

The whole widget/website was built using a pre-generate structure called "create-react-app", this does a lot of the
heavy lifting of the background infrastructure, it's not that important to understand it fully as it doesn't impact our
maintained/use case, rather there are only a few keys things to know:

- The ```package.json``` file holds some of the "core" bits of information for the App to work, including which script
  commands (like ```yarn start```) are enabled; what dependencies does the code use, and its current version/metadata.
- The ```yarn.lock``` file holds a more detailed dependency tree, and should never be touched!
- The HTML in ```/public/*``` is what wraps our JavaScript code, and makes it display, it also includes some website
  metadata, but no actual functionality.
- The basic app runs off of the ```src/index.js``` file, which basically just generate the ReactDOM object from our App
  Component, and then passes it to the HTML in ```/public/*```.
- The ```src/app.js``` is the first point where **our** code comes into place, here we built and export the React.js
  Component that is used by ReactDOM. This file also includes some global helper functions that are used throughout the
  codebase.

# Basic Repository Files

There are also a handful of files on this folder that are just basic for any repository:

- The ```README.md``` file is a sort of welcoming/explanatory file for the Project.
- The ```CONTRIBUTING.md``` file details how to properly contribute/edit/change the Project.
- The ```DOCUMENTATION.md``` file carefully documents all of the Project.
- The ```LICENSE.md``` file holds some needed Legal License blobs for the Project.
- The ```CODEOWNERS``` file just determines who the Owners of the Repository are in terms of reviewing Permissions.
- The ```.env.example``` file serves as a Template for the Environmental Variables Config File for the Project.
- The ```.gitignore``` file assures that no unnecessary folders/files are pushed to GitHub.
- The ```/.github``` folder holds some Scripts to automate the deployment Process on GitHub Pages.
- There might be other folders like ```/node_modules``` or ```/build``` that are not important for our case, their are
  automatically generated, and should not be messed with.

# Project's Assets

Our Project makes use of a set or pre-existing Assets to make the Widget, all of these can be found under the
```/assets``` folder. None of these (minus perhaps the getMembers method on the ```Airtable.js``` file) are purely
configurations, and not actually functional, however, changing these will cause the code to change!

- The ```Airtable.js``` file includes some basic utilities to load and configure the Airtable Database Object, and fetch
  the Member Organisation's information we need to display.
- The ```Categories.js``` file holds all the information regarding our Filterable Categories for our Orgs.
- The ```Datatypes.ts``` file is unique for this project, as it is not a JavaScript file, but a TypeScript file. It has
  no objective use for the codebase, it rather serves as a helper for **us** to better understand the formatting of the
  data used throughout the code.
- The ```Filters.js``` file basically holds an Empty Filter Object that will serve as the starting point of any
  filtering.
- The ```Styles.js``` file includes all the CSS styling that make the Widget look pretty.

If you, for example, want to add another filterable Category for example, you should add the Category
in ```Categories.js```, following the object structure from ```Datatypes.ts```, then make sure to add it to the Array at
the end of the Categories file, and then change the ```Filters.js``` default Filter to include that category. Once that
is all done you just need to alter the Formatting method in```Airtable.js``` to include the new field, and that's it!
The codebase will automatically detect and use this new category!

# Helper Components

Although a good amount of the code's logic is in the ```App.js``` file, there are a handful of helper components that
are used to properly render all the components we want on our Widget, these are found under the
```/components``` folder, and are 100% functional. Changes to any of these will change how the widget looks/works at a
core level!

- The ```Card.js``` file holds the Card Component that display a single Organisation's Information, it is purely
  display, and has no actionable methods.
- The ```CategoryFilter.js``` file holds the Category Filter Dropdown Component for a *single* Category, it is also
  purely display, and has no actionable methods. Importantly, it makes use of the ```Select``` component from the
  ```React-Select``` library.
- The ```Filtering.js``` file holds the combined Category Filter Components for *every* Category, it also includes some
  helper actionable methods for its child Category Filters.
- The ```List.js``` file holds all the combined Organisation Card Components it is purely display, and has no actionable
  methods.
- The ```Loader.js``` file, which is not of my authory, holds a basic Spinner which displays instead of the full
  Organisation List while the data is being fetched from Airtable.

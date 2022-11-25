# Overview

This project serves as a stand-alone Widget for the Climate Action Australia Website. This application is hosted on
GitHub Pages, and then Embedded on the SquareSpace website.

Built fully in React.js, based on the [Create React App](https://github.com/facebook/create-react-app) project.

# App & Setup

In order to run/develop/work on this project on your computer, follow the steps below:

1. Install and setup GIT following this [tutorial](https://www.atlassian.com/git/tutorials/install-git).
2. Install Node following this [tutorial](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
3. Install YARN following this [tutorial](https://classic.yarnpkg.com/en/docs/install).
4. Install either [Sublime Text](https://www.sublimetext.com/), or [Atom](https://atom.io/).
5. Setup a local copy of this GIT Repository following
   this [tutorial](https://www.educative.io/answers/how-to-clone-a-git-repository-using-the-command-line).
    1. The GIT link you need for the clone is https://github.com/CANA-Dev/CANA-Dev.github.io.git.
6. Setup your local .env file:
    1. Copy the .env.example file already on the folder, and rename the **copy** *(not the original)* to ".env".
    2. Open the file and replace the placeholder values with your personal API keys *(see Slack for help)*.

At this point, you should have a local copy of the files, which you can open via Atom or Sublime Text (make sure to open
the folder, so you have full access without going back and forward).

# Running The App

Once you have gone through the setup above, you should be able to run a local version of the App.

To run the app locally, open your Command Line on this folder, and use the command: ```yarn start```. This will open a
local development host at [http://localhost:3000](http://localhost:3000).

To build and preview a finalized version of the app, open your Command Line on this folder, and use the
command: ```yarn build```. See the section
about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
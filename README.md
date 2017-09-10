# Reactjs_api
Sample react js api using Material-ui


There are basically there files in the project repo.
index.html --> This is the main file that gets loaded into the browser.
App.js --> Appjs is the main functional file. This will hold the constructor, api calls and the main render function to load the content.
main.js --> This will be the entry point and will import App.js.

Modules Used:
* webpack
* webpack-dev-server
* react
* react-dom
* material-ui
* babel kit (core, loader and es6 support)

Steps to get it running:
-Download the zip and extract to a folder under /nodejs/ (Assuming nodejs is installed)
-npm init
-npm install (required modules)
-npm webpack-dev-server --hot (We can add this to our webpack.config.js file as "start":"webpackdev-server --hot")
      Running in --hot mode will auto refresh the browswer on file save.
 -Navigate to http://localhost:8080 in the browser
 I used port 8080, it can be changed anytime by editing webpack.config.js

# Excluding Code from Webpack Bundles

 This repo illustrates how to use Webpack's `null-loader`, the `DefinePlugin`,
 and the `UglifyJsPlugin`'s dead code removal behavior to completely remove 
 modules and code paths from a production build. This is useful for exposing 
 additional functionality that might come in handy during testing or active 
 development but should never be shipped to the end user. This repo also 
 takes advantage of the `html-webpack-plugin` module to auto generate the HTML 
 for each build.

## What is the application itself?
 
 This application writes the app's current `status` to a `div` so the user 
 can read it in the browser. When methods are called it outputs information to
 the console to inform the developer what's happening.
 
 It also supports a QA Mode which exposes two buttons in the DOM that when 
 clicked call methods in the app and/or change the app's state.
 
 Three webpack configurations are provided that illustrate building this 
 application for different environments, each of which can determine whether 
 they want to support things like QA Mode or console messages.
 
## System Dependencies
 - [NodeJS/NPM](https://nodejs.org/en/download/) You must have node installed
  and be able to install local packages using `npm` in order to work with 
  this repo.
  
## Getting Started

 1. Clone the repo
 1. `cd` into the directory where you cloned this repository and run `npm 
 install`. This will fetch all of the project's dependencies.
 
 
## Active Development
 
 The `npm start` command will serve this application using 
 `webpack-dev-server` and host all of the bundled assets in memory. When 
 changes are detected in the code a build will occur automatically and the page 
 will be reloaded. 
 
 This uses the `webpack.config.local.js` file and supports both QA Mode and 
 console output.
 
## Builds
 
### Dev
 
 Cut a dev build to `./dist/dev` with the command `npm run build:dev`. This 
 build is very similar to the one used for active development in that it 
 supports QA Mode, but it also uglifies the code and provides a sourcemap.
 
### Prod

 Cut a prod build to `./dist/prod` with the command `npm run build:prod`. 
 This build does not support QA Mode or console statements, completely 
 removes all QA code paths, and replaces the qa-helper module with an empty one.
 
## Verifying The Output 

 You can confirm the production build is missing the `qa-helper` module and the 
 app's qaMethod body using grep. First cut a dev and prod build, then compare
 the outputs of the following commands:
 
 ```
 cat dist/dev/*.js | grep -Eo '.{0,20}QA.{0,20}'
 ```
 
 ```
 cat dist/prod/*.js | grep -Eo '.{0,20}QA.{0,20}'
 ```
 
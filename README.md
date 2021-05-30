# SoPra FS21 - Scotland Yard Zürich Edition - Client

## Introduction
Hi there, we are five students from the University of Zurich, who developed this application for the Software Engineering Lab FS21. The aim of this project was to create an online version of the popular board game "Scotland Yard". The main feature of the project was to transfer the game settings from London (where the game is originally based) to Zurich. All the stations and lines displayed in the game are from the real public transport system of Zurich.

Users can register and login to their profile on the [website](https://sopra-fs21-group-08-client.herokuapp.com/), where they see their player statistics and other online users. From there, the users can create or join public lobbies to play together with their friends. After a game has started, the players get assigned a role (detective or Mister X) and they are randomly positioned on the map. The goal is then for the detectives to catch Mister X using the public transport system of Zurich. To enhance the user experience, the players can chat with each other during a game and replay after the game is over. Additionally, after each game the score gets added to the players' user statistics.

## Technologies used
- [React](https://reactjs.org) as a framework for building the interface
- [Bootstrap Components](https://react-bootstrap.github.io/components/alerts) for the design
- [Npm](https://www.npmjs.com) as the packet manager
- [React Leaflet](https://react-leaflet.js.org) for the map of Zurich

Connection to the [backend](https://github.com/sopra-fs21-group-08/sopra-fs21-group08-server) works through representational state transfer.
  
## High Level Components



## Prerequisites and Installation

For your local development environment you'll need Node.js >= 8.10. You can download it [here](https://nodejs.org). All other dependencies including React get installed with:

### `npm install`

This has to be done before starting the application for the first time (only once).

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console (use Google Chrome!).

### `npm run test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> For macOS user running into an 'fsevents' error: https://github.com/jest-community/vscode-jest/issues/423

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The application is deployed on [heroku](https://sopra-fs21-group-08-client.herokuapp.com/)

## Illustrations
### Gameflow
![Gameflow](https://github.com/sopra-fs21-group-08/sopra-fs21-group08-client/blob/master/readme/images/gameflow.png?raw=true)

## Roadmap

## Authors and acknowledgement

### Frontend developers
- Zoia Katashinskaia, BSc Computer Science, University of Zurich
- Tobias Frauenfelder, BSc Computer Science, University of Zurich
- Marvin Münger, BSc Computer Science, University of Zurich

### Images
Icons made by [Freepik](https://www.freepik.com/) from www.flaticon.com

### Map
[Map Data](https://www.stadt-zuerich.ch/geodaten/download/527)

## MIT Licence
Copyright (c) 2021 [Zoia Katashinskaia, Tobias Frauenfelder, Marvin Münger]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

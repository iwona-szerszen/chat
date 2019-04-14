# chat
Simple chat application created with Node.js, Socket.io and React.


## Table of contents
* [Aim of project](#aim-of-project)
* [Technologies](#technologies)
* [Getting Started](#getting-started)


## Aim of project
The project was created as a part of Web Developer bootcamp in order to learn WebSockets technology.


## Technologies
Project created with:
* React
* Express
* Socket.io
* Webpack


## Getting Started
To run this project, install it locally using npm:
```
 $ cd chat
 $ npm install
```
then run server which deals with real-time communication and serves static files:
```
 $ node index.js
```
then start the app in the new terminal window in development mode:
```
 $ npm start
```
and in the end open browser on http://localhost:8080 to run chat.
To simulate conversation of more app users, open new browser tab using also http://localhost:8080.

To run the application in production mode, build the project:
```
 $ npm run build
```
and then open browser on http://localhost:3000. 
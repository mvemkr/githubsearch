Angular 2 RC5 and Node js Simple Github Service
===============================================

## Prerequisites
- [Node.js](http://nodejs.org/) - install via
    - [homebrew](http://brew.sh/) on Macs
    - [chocolatey](http://chocolatey.org/) on Windows
    - or grab the installer from [the node.js website](http://nodejs.org/)
- [NPM](https://www.npmjs.org/) - this comes with Node.js
- [Gulp](https://www.npmjs.com/package/gulp) -  Build your project.
- [nodemon](http://nodemon.io) - automatically reload node server, however not necessary.

## Initial Setup
- Grab the source
- Run `(sudo) npm install` to get all the dependencies
- Go to Github, sign in, click your profile picture, then settings.  Click OAuth Applications, then the Developer Applications tab and create a new application.
- You will need to create a secret.ts file in the config folder and name it SecretConfig with properties both your client id and secret for github that you received in the previous step.
- Go to your directory and run Gulp, which you should have installed either locally or globally on your machine.
- Run `npm start` this will run your nodemon server which will allow you to access the app component

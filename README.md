Democracy.io
============

[![Build Status](https://travis-ci.org/EFForg/democracy.io.svg?branch=master)](https://travis-ci.org/EFForg/democracy.io)

Express & Angular app for sending messages to Senate and House members

(c) 2015 Electronic Frontier Foundation

## Table of Contents

* [Background Info](#background-info)
* [Getting Started](#getting-started)
* [App Configuration](#app-configuration)
* [Run tests](#run-tests)
* [Running the server](#running-the-server)
* [Angular App](#angular-app)
* [Deploy to Heroku](#deploy-to-heroku)

## Background Info

Democracy.io is an app for contacting Senate & House members. It provides a user friendly wrapper around the individual member contact forms.

It uses APIs from:
* [Smarty Streets](https://smartystreets.com/docs)
* [Phantom of the Capitol](https://github.com/EFForg/phantom-of-the-capitol)

## Getting started

### Redis

Ensure that Redis is running locally:
```
sudo apt-get install redis-server
```
or install manually via http://redis.io/topics/quickstart - making sure to read the "Securing Redis" section, especially if you install Redis manually.

### App dependencies & build

```
npm install
npm run build
```

### credentials

You can generate required creds by running

```
node bin/gen-creds.js
```

or:

After you've run `npm install` generate a salt for encrypting IP addresses and store it in your local.json file, under: SERVER > CREDENTIALS > IP > SALT

```
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
console.log(salt);
```

Set a session secret and store it in your local.json file, under: SERVER > CREDENTIALS > SESSION > SECRET

## App Configuration

App config is controlled via the [node-config](https://github.com/lorenwest/node-config) module.

To set credentials, create a local-dev.json file under the [config dir](/config) and override the SERVER.CREDENTIALS setting.

Alternately, you can use:
* [Environment variables](https://github.com/lorenwest/node-config/wiki/Environment-Variables)
* [Command line options](https://github.com/lorenwest/node-config/wiki/Command-Line-Overrides)

## Run tests

```
npm run test
```

## Running the server locally

Spins up a local server to serve the app, including proxying browsersync on top of the express server.

```
gulp serve
```

## Deploying

To deploy the server, simply run:

```
pm2 deploy ecosystem.json5 production
```

For more instructions on setting up a production server, check [/deployment/README.md](deployment/README.md).

## Angular app

See the [www/README.md](/www/README.md) for details

## Deploy to Heroku

 - Install [heroku cli](https://devcenter.heroku.com/articles/heroku-cli) and create new heroku app.
 - Clone the repository from [here](https://github.com/sujameslin/democracy.io)
Note that this repository is a bit different with original [one](https://github.com/EFForg/democracy.io).
It has more strict dependency version(dependency name: angular-inview) than original one.
 - Install Redis
    - Install redis on heroku app by visiting [here](https://elements.heroku.com/addons/heroku-redis)
    - Get REDIS URL by running `heroku config:get REDIS_URL` on your teminal(command tool)
    - Copy and paste into config/production.json
        Replace the old redis url with copied one at line #11
        Update old config from line #15~#17 with new one(you can extract HOSTNAME, PORT, PASS from REDIS_URL. Note that redis url format is redis://:password@hostname:port)
 - Add heroku git remote
    Run `heroku git:remote -a [app name]`
 - Deploy to Heroku
    Run `git push heroku`

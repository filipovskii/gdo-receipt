#!/usr/bin/env node

var livereload = require('livereload');

server = livereload.createServer();
server.watch(__dirname + '/client');

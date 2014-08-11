/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  compassOptions: {
    outputStyle: 'expanded',
    require: ['sass-css-importer']
  }
});

module.exports = app.toTree();
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {

  });

  app.import('bower_components/moment/moment.js')
  app.import('vendor/gmaps.js');

  return app.toTree();
}

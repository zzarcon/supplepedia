import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.LOG_VERSION = false;
Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'supplepedia', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'supplepedia');

export default App;

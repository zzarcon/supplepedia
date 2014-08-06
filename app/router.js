import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SupplepediaENV.locationType
});

Router.map(function() {
  this.route('dashboard');
  this.route('supplement', {path: '/:supplement_id'});
});

export default Router;
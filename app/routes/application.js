var BRANDS_DATA = {
  brands: [{
    id: 1,
    name: 'Dymatize'
  }, {
    id: 2,
    name: 'ON'
  }, {
    id: 3,
    name: 'Animal Cuts'
  }, {
    id: 4,
    name: 'Weider'
  }, {
    id: 5,
    name: 'Nutrisport'
  }]
};

App.ApplicationRoute = Ember.Route.extend({
  beforeModel: function() {
    this.get('store').pushPayload('brand', BRANDS_DATA);
  }
});
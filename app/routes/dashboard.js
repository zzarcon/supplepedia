var SUPPLEMENTS_DATA = {
  supplements: [{
    id: 1,
    type: 'protein',
    brand_id: 1
  }, {
    id: 2,
    type: 'protein',
    brand_id: 1
  }, {
    id: 3,
    type: 'protein',
    brand_id: 2
  }, {
    id: 4,
    type: 'protein',
    brand_id: 3
  }, {
    id: 5,
    type: 'protein',
    brand_id: 3
  }, {
    id: 6,
    type: 'protein',
    brand_id: 4
  }]
};

App.DashboardRoute = Em.Route.extend({
  beforeModel: function() {
    this.get('store').pushPayload('supplement', SUPPLEMENTS_DATA);
  },
  model: function() {
    return this.get('store').all('supplement');
  }
});
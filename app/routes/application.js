import Ember from "ember";

export
default Em.Route.extend({
  beforeModel: function() {
    //FAKE DATA FOR DEVELOPMENT
    var brands = ['ON', 'Dymatize', 'Weider'];
    var types = ['protein', 'casein', 'creatine', 'bcca', 'l-carnitine', 'glutamine'];
    var supplements = [{
      brand: 'ON',
      type: 'protein'
    }, {
      brand: 'ON',
      type: 'casein'
    }, {
      brand: 'ON',
      type: 'creatine'
    }, {
      brand: 'Dymatize',
      type: 'protein'
    }, {
      brand: 'Dymatize',
      type: 'casein'
    }, {
      brand: 'Dymatize',
      type: 'creatine'
    }, {
      brand: 'Dymatize',
      type: 'bcca'
    }, {
      brand: 'Weider',
      type: 'protein'
    }, {
      brand: 'Weider',
      type: 'l-carnitine'
    }, {
      brand: 'Weider',
      type: 'glutamine'
    }, {
      brand: 'Weider',
      type: 'bcca'
    }];

    types.forEach(function(type) {
      this.get('store').createRecord('supplementType', {
        id: type,
        name: type
      });
    }, this);

    brands.forEach(function(brand) {
      this.get('store').createRecord('brand', {
        id: brand,
        name: brand
      });
    }, this);

    supplements.forEach(function(supplement) {
      this.get('store').createRecord('supplement', {
        id: supplement.brand + '-' + supplement.type,
        brand: this.get('store').getById('brand', supplement.brand),
        type: this.get('store').getById('supplementType', supplement.type)
      });
    }, this);
  }
});
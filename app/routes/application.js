import Ember from "ember";

export
default Ember.Route.extend({
  beforeModel: function() {
    //FAKE DATA FOR DEVELOPMENT
    var brands = ['ON', 'Dymatize', 'Weider'];
    var types = ['protein', 'casein', 'creatine', 'bcaa', 'l-carnitine', 'glutamine'];
    var supplements = [{
      brand: 'ON',
      type: 'protein',
      image: "http://swh0hg.cloudimage.io/s/resizebox/600x600/mm/tienda/images/optimum-nutrition_100-whey-gold-standard-2lb-09kg.jpg"
    }, {
      brand: 'ON',
      type: 'glutamine',
      image: "http://swh0hg.cloudimage.io/s/resizebox/600x600/mm/tienda/images/optimum-nutrition_optimum-glutamina-en-polvo-1-kg.jpg"
    }, {
      brand: 'ON',
      type: 'casein',
      image: "http://swh0hg.cloudimage.io/s/resizebox/600x600/mm/tienda/images/optimum-nutrition_100-caseina-gold-standard-18-kg.jpg"
    }, {
      brand: "ON",
      type: "bcaa",
      image: "http://swh0hg.cloudimage.io/s/resizebox/600x600/mm/tienda/images/optimum-nutrition_bcaa-1000-200-capsulas.jpg"
    }, {
      brand: 'ON',
      type: 'creatine',
      image: "http://swh0hg.cloudimage.io/s/resizebox/600x600/mm/tienda/images/optimum-nutrition_creatina-powder-600-g.jpg"
    }, {
      brand: 'Dymatize',
      type: 'protein',
      image: "http://swh0hg.cloudimage.io/s/resizebox/600x600/mm/tienda/images/elite_whey_vanilla_-5lbs._solo.jpg"
    }, {
      brand: 'Dymatize',
      type: 'casein',
      image: "http://swh0hg.cloudimage.io/s/resizebox/600x600/mm/tienda/images/dymatize_elite-casein-4-lbs-18kg.jpg"
    }, {
      brand: 'Dymatize',
      type: 'creatine',
      image: "http://swh0hg.cloudimage.io/s/resizebox/600x600/mm/tienda/images/dymatize_creatina-microniced-500-g.jpg"
    }, {
      brand: 'Dymatize',
      type: 'bcaa',
      image: "http://swh0hg.cloudimage.io/s/resizebox/600x600/mm/tienda/images/dymatize_bcaa-complex-2200-400-tabs.jpg"
    }, {
      brand: 'Weider',
      type: 'protein',
      image: "http://swh0hg.cloudimage.io/s/resizebox/600x600/mm/tienda/images/weider_gold-whey-908g.jpg"
    }, {
      brand: 'Weider',
      type: 'l-carnitine',
      image: "http://swh0hg.cloudimage.io/s/resizebox/600x600/mm/tienda/images/l-arginine-weider.jpg"
    }, {
      brand: 'Weider',
      type: 'glutamine',
      image: "http://swh0hg.cloudimage.io/s/resizebox/600x600/mm/tienda/images/weider-glutamina-caps.jpg"
    }, {
      brand: 'Weider',
      type: 'bcaa',
      image: "http://swh0hg.cloudimage.io/s/resizebox/600x600/mm/tienda/images/weider-premium-bcaa-powder-500.jpg"
    }, {
      brand: 'Weider',
      type: 'casein',
      image: "http://swh0hg.cloudimage.io/s/resizebox/600x600/mm/tienda/images/Weider_100__casein.jpg"
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
        type: this.get('store').getById('supplementType', supplement.type),
        image: supplement.image
      });
    }, this);
  }
});
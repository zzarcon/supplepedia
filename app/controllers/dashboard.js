import Ember from "ember";

export default Ember.ArrayController.extend({
  supplementName: "",
  currentSupplementType: "All",
  currentBrand: "All",

  content: function() {
    return this.get('store').all('supplement');
  }.property(),

  supplementTypeNames: function() {
    return ['All'].concat(this.get('store').all('supplementType').mapBy('name'));
  }.property(),

  brandNames: function() {
    return ['All'].concat(this.get('store').all('brand').mapBy('name'));
  }.property(),

  displayedContent: function() {
    var supplementName = this.get('supplementName');
    var typeName = this.get('currentSupplementType');
    var brandName = this.get('currentBrand');
    var nameFilter, typeFilter, brandFilter;

    return this.filter(function(supplement) {
      // nameFilter = supplement.get('brand.name').indexOf(supplementName) !== -1
      //   || supplement.get('type.name').indexOf(supplementName) !== -1;
      typeFilter = supplement.get('type.name') === (typeName !== 'All' ? typeName : supplement.get('type.name'));
      brandFilter = supplement.get('brand.name') === (brandName !== 'All' ? brandName : supplement.get('brand.name'));

      return typeFilter && brandFilter;
    });
  }.property('supplementName', 'currentSupplementType', 'currentBrand'),

  _arrangedContent: Ember.computed.filter('content', function(supplement) {
    console.log('arrangedContent');
    return supplement;
  })
})
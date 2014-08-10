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
    var currentType = this.get('currentSupplementType');
    var currentBrand = this.get('currentBrand');
    var nameFilter, typeFilter, brandFilter, brandName, typeName;

    return this.filter(function(supplement) {
      brandName = supplement.get('brand.name');
      typeName = supplement.get('type.name');

      nameFilter = brandName.indexOf(supplementName) !== -1 || typeName.indexOf(supplementName) !== -1;
      typeFilter = typeName === (currentType !== 'All' ? currentType : typeName);
      brandFilter = brandName === (currentBrand !== 'All' ? currentBrand : brandName);

      return typeFilter && brandFilter && nameFilter;
    });
  }.property('supplementName', 'currentSupplementType', 'currentBrand'),

  _arrangedContent: Ember.computed.filter('content', function(supplement) {
    console.log('arrangedContent');
    return supplement;
  })
});
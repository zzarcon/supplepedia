App.Supplement = DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  brand: DS.belongsTo('brand')
});
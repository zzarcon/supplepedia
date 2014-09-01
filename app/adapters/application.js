import DS from "ember-data";

export default DS.ActiveModelAdapter.extend({
  namespace: 'api',
  bulkCommit: true,
  pathForType: function(type) {
    var underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  }
});
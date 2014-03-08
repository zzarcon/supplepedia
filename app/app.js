(function(exports) {
  'use strict';
  //RSVP Error handling
  Ember.RSVP.on('error', function(event) {
    console.error(event.message);
    console.error(event.stack);
  });

  //Ember features
  Ember.FEATURES["ember-routing-loading-error-substates"] = true;

  //App declaration
  var App = Ember.Application.create({
    location: 'history'
  });

  //Adapter
  App.ApplicationAdapter = DS.ActiveModelAdapter.extend({
    namespace: 'api',
    bulkCommit: true,
    pathForType: function(type) {
      var underscored = Ember.String.underscore(type);
      return Ember.String.pluralize(underscored);
    }
  });

  //Serializer
  App.ApplicationSerializer = DS.ActiveModelSerializer.extend({

    serializeHasMany: function(record, json, relationship) {
      var key = relationship.key;
      var json_key = key.singularize().decamelize() + '_ids';

      var relationshipType = DS.RelationshipChange.determineRelationshipType(
        record.constructor, relationship);

      if (relationshipType === 'manyToNone' || relationshipType === 'manyToMany' || relationshipType === 'manyToOne') {
        json[json_key] = Ember.get(record, key).mapBy('id');
      }
    }
  });

  //Routes
  App.Router.map(function() {
    this.route('dashboard', {
      path: '/'
    });
    this.route('supplement', {
      path: ':supplement_id'
    });
  });

  exports.App = App;

})(window);
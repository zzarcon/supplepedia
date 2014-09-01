import DS from "ember-data";

export default DS.Transform.extend({
  serialize: function(value) {
    if (Em.typeOf(value) === 'array') {
      return value;
    } else {
      return [];
    }
  },
  deserialize: function(data) {
    if (Array.isArray(data)){
      return data.map(function(item){
        return this.deserialize(item);
      }, this);
    } else if ( typeof data == 'object'){
      return Em.Object.create(this.camelizeKeys(data));
    } else {
      return data;
    }
  }
});
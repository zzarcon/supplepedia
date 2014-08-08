//Represent a instance of one supplement
//Example: ON Whey protein

//TODO Find way to store flavours, supplement macros, etc
import DS from "ember-data"

export default DS.Model.extend({
  type: DS.belongsTo('supplementType'),
  brand: DS.belongsTo('brand')
});
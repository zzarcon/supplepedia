//Singleton classes for represent one type of supplement.
//Examples: Protein, creatine, bcca, etc...

import DS from "ember-data"

export default DS.Model.extend({
  name: DS.attr('string')
});
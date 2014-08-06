import Ember from "ember";

export default Em.Route.extend({
  redirect: function() {
    this.replaceWith('dashboard');
  }
});
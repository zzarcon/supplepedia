import Ember from 'ember';

export default Ember.View.extend({
  elementId: 'supplepedia',
  classNameBindings: ['loaded'],
  loaded: false,

  animate: function() {
    //Improve this shit
    Ember.run.later(this, function() {
      this.set('loaded', true);
      Ember.run.later(this, function() {
        this.$('#init-logo').remove();
      }, 1500);
    }, 1000);
  }.on('didInsertElement')
});
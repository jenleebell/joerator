import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('coffeeshop')
  },

  actions: {
    saveCoffeeshop(params) {
      var newCoffeeshop = this.store.createRecord("review", params);
      newCoffeeshop.save();
      params.coffeeshop.save();
      this.transitionTo('index');
    }
  }
});

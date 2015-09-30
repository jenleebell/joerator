import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    this.store.findAll('coffeeshop')
  },

  actions: {
    saveCoffeeshop(params){
      debugger;
      var newRecord = this.store.createRecord("coffeeshop", params);
      newRecord.save();
      this.transitionTo("index");
    }
  }
});

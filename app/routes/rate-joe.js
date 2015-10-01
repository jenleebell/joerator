import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('coffeeshop')
  },

  actions: {
    saveCoffeeshop(params) {
      debugger;
      var newReview = this.store.createRecord("review", params);
      newReview.save();

      var relatedCoffeeshop = this.store.find('coffeeshop', params.coffeeshop.id).then(function(coffee) {
        coffee.incrementProperty("qualityRating", params.qualityRating);
        coffee.incrementProperty("studyRating", params.studyRating);
        coffee.incrementProperty("laptopRating", params.laptopRating);
        coffee.incrementProperty("hipsterRating", params.hipsterRating);
        coffee.incrementProperty("numOfReviews");
        coffee.save();
      });
      params.coffeeshop.save();

      this.transitionTo('index');
    }
  }
});

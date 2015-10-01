import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      coffeeshops: this.store.findAll('coffeeshop'),
      reviews: this.store.findAll('review')
    });
  }

});

import Ember from 'ember';

export default Ember.Controller.extend({
  sortProps: ['created_at:desc'],
  sortedReviews: Ember.computed.sort('model.reviews', 'sortProps'),
  numberOfReviews: Ember.computed('model.rewiews')
});

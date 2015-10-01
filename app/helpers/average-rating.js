import Ember from 'ember';

export function averageRating(model) {
  var rating = model.get('firstObject').get('qualityRating');
  var length = model.get('firstObject').get('numOfReviews');
  return rating / length;
}

export default Ember.Helper.helper(averageRating);

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  address: DS.attr(),
  qualityRating: DS.attr(),
  studyRating: DS.attr(),
  laptopRating: DS.attr(),
  hipsterRating: DS.attr(),
  reviews: DS.hasMany('review', { async: true }),
  created_at: DS.attr(),
  edited_at: DS.attr()
});

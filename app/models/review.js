import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  body: DS.attr(),
  title: DS.attr(),
  qualityRating: DS.attr(),
  studyRating: DS.attr(),
  laptopRating: DS.attr(),
  hipsterRating: DS.attr(),
  created_at: DS.attr(),
  edited_at: DS.attr(),
  coffeeshop: DS.belongsTo('coffeeshop', { aysnc: true})
});

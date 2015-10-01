import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveCoffeeshop() {

      var params = {
        name: this.get("name"),
        address: this.get("address"),
        image_link: this.get('image_link'),
        web_address: this.get('web_address'),
        qualityRating: 0,
        laptopRating: 0,
        hipsterRating: 0,
        studyRating: 0,
        created_at: new Date(),
        edited_at: false,
        numOfReviews: 0
      };
      this.sendAction('saveCoffeeshop', params);
    }
  }
});

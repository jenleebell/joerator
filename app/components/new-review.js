import Ember from 'ember';

export default Ember.Component.extend({
  rateQuality: "",
  rateHipster: "",
  rateLaptop: "",
  rateStudy: "",
  coffeeshopName: "",

  actions: {
    rateQuality(rating) {
      this.set("rateQuality", rating);
    },
    rateStudy(rating) {
      this.set("rateStudy", rating);
    },
    rateLaptop(rating) {
      this.set("rateLaptop", rating);
    },
    rateHipster(rating) {
      this.set("rateHipster", rating);
    },

    sendToInput(model) {
      var coffeeshopName = model.get('name');
      this.set('coffeeshopName', model);
      $("#coffeeshop").val(coffeeshopName);
    },

    saveCoffeeshop() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        title: this.get('title'),
        qualityRating: this.rateQuality,
        hipsterRating: this.rateHipster,
        laptopRating: this.rateLaptop,
        studyRating: this.rateStudy,
        created_at: new Date(),
        edited_at: false,
        coffeeshop: this.coffeeshopName
      };
      this.sendAction('saveCoffeeshop', params);
    }

  }
});

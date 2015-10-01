import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('make-joe');
  this.route('rate-joe');
  this.route('coffeeshop', { path: '/coffeeshop/:coffeeshop_id'} );
  this.route('all');
});

export default Router;

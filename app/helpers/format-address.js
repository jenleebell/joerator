import Ember from 'ember';

export function formatAddress(address) {
  return address.replace(" ", "+");
}

export default Ember.Helper.helper(formatAddress);

import Ember from 'ember';

export function rentalCost(params) {
  var rentalPrice = params[0].get('cost');

  if (rentalPrice >= 150) {
    return '$$$$';
  } else if (rentalPrice >= 100) {
    return '$$$';
  } else if (rentalPrice >= 50) {
    return '$$';
  } else if (rentalPrice <= 49) {
    return '$';
  }
}

export default Ember.Helper.helper(rentalCost);

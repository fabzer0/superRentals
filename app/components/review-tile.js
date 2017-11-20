import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(review) {
      if (confirm('Are you sure you want to delete this review')) {
        this.sendAction('destroyReview', review);
      }
    }
  }
});

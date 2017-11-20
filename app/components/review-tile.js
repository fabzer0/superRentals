import Ember from 'ember';

export default Ember.Component.extend({

  heading: Ember.computed('review.author', 'review.rating', function() {
    return this.get('review.author') + ' - ' + this.get('review.rating');
  }),
  
  actions: {
    delete(review) {
      if (confirm('Are you sure you want to delete this review')) {
        this.sendAction('destroyReview', review);
      }
    }
  }
});

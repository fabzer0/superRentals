import Ember from 'ember';

var rentals = [{
  id: 1,
  owner: "Veruca Salt",
  city: "San Fransisco",
  type: "Estate",
  bedrooms: 15,
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"

}, {
  id: 2,
  owner: "Mike TV",
  city: "Seattle",
  type: "Condo",
  bedrooms: 1,
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"

}, {
  id: 3,
  owner: "Violet Beauregarde",
  city: "Portland",
  type: "Apartment",
  bedrooms: 3,
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
}];

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      reviews: this.store.findAll('review')
    });
  },

  actions: {
    saveRental3(params) {
     var newRental = this.store.createRecord('rental', params);
     newRental.save();
     this.transitionTo('index');
   }
  }
});

angular.module('artoo').controller('ContactsCtrl', function ($state, color) {
  console.info('ContactsCtrl now runs');
  this.color = $state.current.data.color;  // access color prop in current state data
  this.resolveColor = color;
});
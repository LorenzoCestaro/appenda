angular.module('appenda').controller('AddEventCtrl', function ($state, EventsSrv) {
  this.minDate = new Date();
  
  this.add = function (newEvent, form) {
    EventsSrv.create(newEvent);
    this.newEvent = {};
    $state.go('home');
  };
})
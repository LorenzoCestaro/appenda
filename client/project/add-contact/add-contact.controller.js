angular.module('appenda').controller('AddContactCtrl', function ($state, ContactsSrv) {
  this.add = function (newContact, form) {
    ContactsSrv.create(newContact);
    this.newContact = {};
    $state.go('home');
  };
});
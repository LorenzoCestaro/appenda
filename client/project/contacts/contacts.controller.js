angular.module('appenda').controller('ContactsCtrl', function ($scope, ContactsSrv) {
  this.ContactsSrv = ContactsSrv;
  
  this.add = function (newContact, form) {
    ContactsSrv.create(newContact);
    this.newContact = {};
    $scope.contactForm.$setPristine();
    $scope.contactForm.$setValidity();
  };
});
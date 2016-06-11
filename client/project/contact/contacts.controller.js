angular.module('appenda').controller('ContactsCtrl', function ($scope, ContactsSrv) {
  $scope.ContactsSrv = ContactsSrv;
  
  $scope.add = function (newContact) {
    ContactsSrv.create(newContact);
    $scope.newContact = {};
  };
});
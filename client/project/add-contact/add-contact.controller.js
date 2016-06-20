angular.module('appenda').controller('AddContactCtrl', function ($scope, $state, ContactsSrv) {

  $scope.newContact = ContactsSrv.create();
  
  $scope.save = function (newContact, form) {
    newContact.name = newContact.name.charAt(0).toUpperCase() + newContact.name.slice(1);
    newContact.surname = newContact.surname.charAt(0).toUpperCase() + newContact.surname.slice(1);
    newContact.$save()
      .then((data) => {
        newContact = ContactsSrv.create();
        form.$setPristine;
        $state.go('home');
      })
      .catch(err => console.error(err))
      .finally();
  }
});
angular.module('appenda').controller('AddContactCtrl', function ($scope, $state, ContactsSrv) {

  $scope.newContact = ContactsSrv.create();
  
  $scope.save = function (newContact, form) {
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
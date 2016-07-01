angular.module('appenda').controller('AddContactCtrl', function ($scope, $state, $stateParams, ContactsSrv) {
  
  if ($stateParams.id) {
    $scope.getLoading = true;
    ContactsSrv.getContact($stateParams.id)
      .then(data => $scope.newContact = data)
      .catch(err => console.error(err))
      .finally(() => $scope.getLoading = false)
  } else {
    $scope.newContact = ContactsSrv.create();
  }
    
  $scope.save = function (newContact) {
    newContact.name = newContact.name.charAt(0).toUpperCase() + newContact.name.slice(1);
    newContact.surname = newContact.surname.charAt(0).toUpperCase() + newContact.surname.slice(1);
    newContact.$save()
      .then((data) => {
        newContact = ContactsSrv.create();
        $state.go('contacts');
      })
      .catch(err => console.error(err))
      .finally();
  }
});
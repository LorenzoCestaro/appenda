angular.module('appenda').controller('ContactsCtrl', function ($scope, ContactsSrv) {
  this.ContactsSrv = ContactsSrv;
  
  $scope.query = function () {
    $scope.queryLoading = true;
    ContactsSrv.query()
    .then(data => $scope.contacts = data)
    .catch(err => console.error(err))
    .finally($scope.queryLoading = false);
  };
  
  $scope.query();
  
  $scope.remove = function (contact) {
    contact.$remove()
      .then(data => ContactsSrv.query())
      .then(data => $scope.contacts = data)
      .catch((err) => {
        if(err.status === 404) {
          alert('refresca fhii');
        }
      })
      .finally();
  };
  
});
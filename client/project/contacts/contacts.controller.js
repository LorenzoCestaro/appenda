angular.module('appenda').controller('ContactsCtrl', function ($scope, $state, $mdToast, ContactsSrv) {
  this.ContactsSrv = ContactsSrv;
  
  $scope.query = function () {
    $scope.queryLoading = true;
    ContactsSrv.query()
    .then(data => $scope.contacts = data)
    .catch(err => console.error(err))
    .finally(() => $scope.queryLoading = false);
  };
  
  $scope.query();
  
  $scope.remove = function (contact) {
    contact.simulRemove = true;
      contact.$remove()
        .then(() => ContactsSrv.query())
        .then(data => $scope.contacts = data)
        .catch((err) => {
          if(err.status === 404) {
            alert('Try to refresh the list');
          }
        })
        .finally();
    };
  
  $scope.showDeleteToast = function(deleted) {
    var toast = $mdToast.simple()
                  .position('top right')
                  .action('OK')
                  .textContent('You removed ' + deleted.name + ' ' + deleted.surname + '!')
                  .hideDelay(3000);
    $mdToast.show(toast);
  };
  
});
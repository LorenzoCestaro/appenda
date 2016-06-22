angular.module('appenda').controller('ContactsCtrl', function ($scope, $state, $mdToast, $timeout, ContactsSrv) {
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
    
    removeTimeout = $timeout(() => {
      contact.$remove()
        .then(data => ContactsSrv.query())
        .then(data => $scope.contacts = data)
        .catch((err) => {
          if(err.status === 404) {
            alert('refresca fhii');
          }
        })
        .finally();
    }, 
        3000
    )};
  
  $scope.showActionToast = function(deleted, contact) {
    var toast = $mdToast.simple()
                  .position('top right')
                  .action('UNDO')
                  .textContent('You removed ' + deleted + '!')
                  .hideDelay(3000)
    $mdToast.show(toast)
      .then(function (response) {
        if ( response == 'ok' ) {
          $timeout.cancel(removeTimeout);
          contact.simulRemove = false;
        }
      });
  };
  
});
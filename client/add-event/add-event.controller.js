angular.module('appenda').controller('AddEventCtrl', function ($scope, $state, $stateParams, EventsSrv, ContactsSrv, $timeout) {
  $scope.minDate = new Date();
  
  ContactsSrv.query()
    .then(data => $scope.contacts = data)
    .catch(err => console.error(err))
    .finally();
  
  if ($stateParams.id) {
    $scope.getLoading = true;
    EventsSrv.getEvent($stateParams.id)
      .then(data => {
        data.date = new Date(data.date);
        data.time = new Date(data.time);
        $scope.newEvent = data;
        $timeout();
      })
      .catch(err => console.error(err))
      .finally(() => $scope.getLoading = false);
  } else {
    $scope.newEvent = EventsSrv.create();
  }
  
  $scope.save = function (newEvent) {
    newEvent.title = newEvent.title.charAt(0).toUpperCase() + newEvent.title.slice(1);
    
    newEvent.$save()
      .then((data) => {
        newEvent = EventsSrv.create();
        $state.go('home');
      })
      .catch(err => console.error(err))
      .finally();
  }

  $scope.clearSearchTerm = function(select) {
     $scope.searchTerm = '';
  };
});

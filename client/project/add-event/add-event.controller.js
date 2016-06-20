angular.module('appenda').controller('AddEventCtrl', function ($scope, $state, EventsSrv, ContactsSrv) {
  this.minDate = new Date();
  
  $scope.newEvent = EventsSrv.create(); 
  
  $scope.save = function (newEvent, form) {
    newEvent.title = newEvent.title.charAt(0).toUpperCase() + newEvent.title.slice(1);
    newEvent.$save(newEvent)
      .then((data) => {
        newEvent = EventsSrv.create();
        form.$setPristine;
        $state.go('home');
      })
      .catch(err => console.error(err))
      .finally();
  }
  
  $scope.clearSearchTerm = function(select) {
     $scope.searchTerm = '';
  };
  
  $scope.query = function () {
    ContactsSrv.query()
    .then(data => $scope.contacts = data)
    .catch(err => console.error(err))
    .finally();
  };
});

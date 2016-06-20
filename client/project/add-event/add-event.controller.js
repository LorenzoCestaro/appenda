angular.module('appenda').controller('AddEventCtrl', function ($scope, $state, EventsSrv) {
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
})


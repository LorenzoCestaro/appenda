angular.module('appenda').controller('EventsCtrl', function ($scope, EventsSrv) {
  this.EventsSrv = EventsSrv;
  
  $scope.query = function () {
    EventsSrv.query()
    .then(data => $scope.events = data)
    .catch(err => console.error(err));
  };
  
  $scope.query();
  
  $scope.remove = function (event) {
    event.$remove()
    .then(data => EventsSrv.query())
    .then(data => $scope.events = data)
    .catch((err) => {
      if(err.status === 404){
        alert('Refresh, bitch!');
      }
    });
  };
});

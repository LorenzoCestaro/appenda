angular.module('appenda').controller('EventsCtrl', function ($scope, EventsSrv) {
  this.EventsSrv = EventsSrv;
  
  $scope.query = function () {
    $scope.queryLoading = true;
    EventsSrv.query()
    .then(data => $scope.events = data)
    .catch(err => console.error(err))
    .finally($scope.queryLoading = false);
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
    })
    .finally();
  };
});

angular.module('appenda').controller('EventsCtrl', function ($scope, $mdToast, EventsSrv) {
  this.EventsSrv = EventsSrv;
  
  $scope.query = function () {
    $scope.queryLoading = true;
    EventsSrv.query()
    .then(data => $scope.events = data)
    .catch(err => console.error(err))
    .finally(() => $scope.queryLoading = false);
  };
  
  $scope.query();
  
  $scope.remove = function (event) {
    event.$remove()
    .then((data) => EventsSrv.query())
    .then(data => $scope.events = data)
    .catch((err) => {
      if(err.status === 404){
        alert('Refresh');
      }
    })
    .finally();
  };
  
  $scope.showNotes = function (event) {
    event.showNotes = event.showNotes || false;
    event.showing = (event.showing) ? false : true;
    return (event.showNotes) ? event.showNotes = false : event.showNotes = true;
  };
  
  $scope.showDeleteToast = function (deleted) {
    var toast = $mdToast.simple()
                  .position('top right')
                  .action('OK')
                  .textContent('You removed your ' + deleted.title + ' appointment!')
                  .hideDelay(3000);
    $mdToast.show(toast);
  };
  
});

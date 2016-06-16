angular.module('artoo').controller('RedditCtrl', function ($scope, RedditSrv) {
  
  $scope.$watch('search', function (newValue) {
    $scope.loading = true;
    RedditSrv.query(newValue).then(function (data) {
      $scope.reddits = data && data.data && data.data.children;
      $scope.loading = false;
    }).catch();
  }, true);
  
});
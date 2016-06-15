angular.module('artoo').controller('PageLoaderCtrl', function ($scope) {
  $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    $scope.loading = true;
    fromState.name = fromState.name || 'nowhere';
    console.log('- Transition starts from ' + fromState.name + ' to ' + toState.name);
  });
    
  $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    $scope.loading = false;
    console.log('- Transition succedeed from ' + fromState.name + ' to ' + toState.name);
  });
});
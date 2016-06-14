angular.module('artoo').controller('MaterialCtrl', function ($scope) {
  $scope.minDate = new Date(2016, 5, 17);
  $scope.filterPredicate = function(date) {
    var day = date.getDay();
    return day !== 0 && day !== 6;
  };
});
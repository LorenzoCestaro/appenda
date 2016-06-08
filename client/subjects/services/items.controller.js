angular.module('artoo').controller('ItemsCtrl', ($scope, ItemsSrv) => {
  
  // $scope.items = ItemsSrv.get();
  
  // $scope.getItems = ItemsSrv.get;
  
  // advised method: exposing the whole service
  $scope.ItemsSrv = ItemsSrv;
  
});
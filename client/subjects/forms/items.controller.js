angular.module('artoo').controller('ItemsCtrl', function ($scope, ItemsSrv) {
  
  $scope.ItemsSrv = ItemsSrv;
  var masterItem;
  
  // Setting default form values for the selected item
  $scope.selectItem = function (code) {
    var masterItem = $scope.item = angular.copy(ItemsSrv.find(code));
  };
  
  // Initializing form fields (not needed: form appears when an item is selected)
  $scope.selectedItem = ItemsSrv.get()[0].code;
  $scope.selectItem($scope.selectedItem);
  
  $scope.insert = function (item, form) {
    ItemsSrv.insert(item);
    $scope.resetForm(form);
  };
  
  $scope.resetForm = function (form) {
    $scope.item = angular.copy(masterItem);
    //$scope.item = {};
    //form.$setPristine();
  };
  
  $scope.update = function (item, form) {
    ItemsSrv.update(item);
    masterItem = angular.copy(item);
  };
  
});
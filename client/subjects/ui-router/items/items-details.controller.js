angular.module('artoo').controller('ItemsDetailsCtrl', function ($stateParams, ItemsSrv) {
  this.loading = true;
  ItemsSrv.getDetails($stateParams.code, (item) => {
    this.item = item;
    this.loading = false;
  });
});
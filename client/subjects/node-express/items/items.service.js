angular.module('artoo').service('ItemsSrv', function ($resource) {
  
  var Item = $resource('/api/items', {}, {});
  
  // public API
  this.query = function () {
    return Item.query().$promise;
  };
  
  this.create = function () {
    return new Item();
  };
});
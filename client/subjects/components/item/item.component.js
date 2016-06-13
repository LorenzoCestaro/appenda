angular.module('artoo').component('item', {
  bindings: {
    item: '<data',
  },
  controller: 'ItemCtrl',
  controllerAs: 'ItemCtrl',
  templateUrl: '/subjects/components/item/item.html',
});

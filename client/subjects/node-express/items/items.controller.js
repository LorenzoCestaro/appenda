angular.module('artoo').controller('ItemsCtrl', function ($scope, ItemsSrv) {
  
  ItemsSrv.query().then(function (data) {
    console.log(data);
  }).catch();
  
  var newItem = ItemsSrv.create();
  newItem.name = 'Shuriken';
  newItem.$save().then(function (data) {
    console.info(data);
  }).catch(function (err) {
    console.error(err);
  });
});
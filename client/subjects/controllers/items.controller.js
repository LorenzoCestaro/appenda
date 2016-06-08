// create a controller for the items
// $scope is a 'special' object in between the view and the controller
angular.module("artoo").controller("ItemsCtrl", ($scope) => {
  console.log("ItemsCtrl runs!");
 
  // attach the following data to it
  /*
   * Ascia bipenne
   * L’ascia bipenne è una scure a due lame, simbolo del potere minoico.
   * Spazio occupato: 3 slots
   * http://khazalidgrungron.altervista.org/axes/05.png
   */
 
  $scope.item = {
    name: 'Ascia bipenne',
    description: 'L\'ascia bipenne è una scure a due lame, simbolo del potere minoico.',
    image: 'http://khazalidgrungron.altervista.org/axes/05.png',
    slots: 3,
  };

  // attach some behaviours to the controller: read-description, check-if-fits, dispose
  $scope.toggleDescription = () => {
    $scope.visibleDescription = !$scope.visibleDescription;
  };
  
  $scope.checkIfFits = (item, bagSize) => {
    return (item.slots <= bagSize);
  };
  
  $scope.dispose = () => {
    $scope.item = undefined;
  };
  
});

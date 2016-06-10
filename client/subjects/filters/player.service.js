angular.module('artoo').service('PlayerSrv', function () {
  
  var player = {
    name: 'Legolas',
    race: 'elf',
  };
  
  this.get = function () {
    return player;
  }; 
});
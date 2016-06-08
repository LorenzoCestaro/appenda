angular.module('artoo').controller('PlayerCtrl', ($scope) => {
  
  $scope.player = {
    name: 'Legolas',
    hp: 100,
    exp: 17,
    level: 2,
    race: 'elf',
  };
  
  //handles
  $scope.takeDamage = (damage) => {
    $scope.player.hp = ($scope.player.hp <= damage) ? 0 : $scope.player.hp - damage;
  };
  
  $scope.isDead = () => {
    return ($scope.player.hp) ? 'No' : 'Yes';
  };
  
  $scope.levelUp = () => {
    $scope.player.level += 1;
  };
  
  $scope.gainExp = (exp) => {
    var totalExp = $scope.player.exp += exp;
    if (totalExp >= 100) {
      $scope.levelUp();
      totalExp -= 100
    }
    
    $scope.player.exp = totalExp;
  };
  
});
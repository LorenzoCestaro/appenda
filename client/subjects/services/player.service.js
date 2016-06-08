angular.module('artoo').service('PlayerSrv', function () {
  
  var player = {
    name: 'Lorenzo',
    hp: 100,
    exp: 17,
    level: 2,
    race: 'human',
  };
  
  this.die = function () {
    player.hp = 0;
  };
  
  this.drinkPotion = function (heal = 30) {
    if (!this.isAlive()) return;
    var hp = player.hp + heal;
    player.hp = (hp < 101) ? hp : 100;
  };
  
  this.isAlive = function () {
    return !!player.hp;
  };
  
  this.levelUp = function () {
    if (!this.isAlive()) return;
    player.level += 1;
  };
  
  this.gainExp = function () {
    if (!this.isAlive()) return;
    player.exp += 30;
  };
  
  this.getPlayer = function () {
    return player;
  };
  
  this.respawn = function () {
    if (this.isAlive()) return;
    player.hp = 10;
  };
  
  this.takeHit = function (damage = 7) {
    var hp = player.hp - damage;
    player.hp = (hp > 0) ? hp : 0;
  };
  
});
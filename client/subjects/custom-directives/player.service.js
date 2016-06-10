angular.module('artoo').service('PlayerSrv', function () {
  
  var dictionary = {
    fight: 'The player started a fight.',
    potion: 'The player drank a potion.',
    peace: 'The player said \'Peace, man!\'.',
  };
  
  var logs = [{text: 'Logs inited.', date: new Date()}];
  
  this.log = function (code) {
    var text = dictionary[code] || 'The player just made something unexpected.';
    var date = new Date();
    logs.push({text: text, date: date});
  };
  
  this.getLogs = function () {
    return logs;
  };
  
});
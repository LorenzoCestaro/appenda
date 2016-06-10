// filters names are in camelCase by convention
// filters can be chained after the module getter
angular.module('artoo')

  .filter('price', function () {
    return function (input, currency = true) {
      var output = input.toFixed(2);
      return (currency) ? output + ' gold' : output;
    };
  })
  
  .filter('availability', function () {
    return function (input) {
      return (parseInt(input)) ? input + ' pieces' : 'out of stock';
    };
  })
  
  .filter('races', function () {
    return function (input) {
      return input.join(' - ') + '.';
    };
  })
  
  .filter('suitable', function (PlayerSrv) {
    var race = PlayerSrv.get().race;
    
    return function (input) {
      return input.indexOf(race) > -1;
    };
  })
  
  .filter('suitability', function (PlayerSrv) {
    var race = PlayerSrv.get().race;
    
    return function (input, active) {
      return (active && input.filter(singleItem => singleItem.races.indexOf(race) > -1)) || input;
    };
  });
  
angular.module('appenda', [
  'ngMessages',
  'ngAria',
  'ngAnimate',
  'ngMaterial',
])

.config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .warnPalette('deep-orange')
      .accentPalette('indigo')
      .backgroundPalette('grey');
      

  });
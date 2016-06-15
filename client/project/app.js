angular.module('appenda', [
  'ngMessages',
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  'ui.router',
])

.config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .warnPalette('deep-orange')
      .accentPalette('indigo')
      .backgroundPalette('grey');
})

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('home', {
      templateUrl: 'project/home.html',
      url: '/',
    })
    
    .state('add-contact', {
      controller: 'AddContactCtrl',
      controllerAs: 'AddContactCtrl',
      templateUrl:'project/add-contact/add-contact.html',
      url: '/add-contact',
    })
    
    .state('add-event', {
      controller: 'AddEventCtrl',
      controllerAs: 'AddEventCtrl',
      templateUrl:'project/add-event/add-event.html',
      url:'/add-event',
    });
});





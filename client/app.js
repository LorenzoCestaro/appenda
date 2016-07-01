angular.module('appenda', [
  'ngMessages',
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  'ui.router',
  'ngResource',
])

.config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .warnPalette('red')
      .accentPalette('amber')
      .backgroundPalette('grey');
})

.config(($locationProvider) => {
  $locationProvider.html5Mode(true);    
})

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('home', {
      templateUrl: 'home.html',
      url: '/',
    })
    
    .state('contacts', {
      controller: 'ContactsCtrl',
      controllerAs: 'ContactsCtrl',
      templateUrl: 'contacts/contacts.html',
      url: '/contacts'
    })
    
    .state('add-contact', {
      controller: 'AddContactCtrl',
      controllerAs: 'AddContactCtrl',
      templateUrl:'add-contact/add-contact.html',
      url: '/add-contact/:id',
    })
    
    .state('add-event', {
      controller: 'AddEventCtrl',
      controllerAs: 'AddEventCtrl',
      templateUrl:'add-event/add-event.html',
      url:'/add-event/:id',
    });
})

.run(($rootScope, $state) => {
  $rootScope.$state = $state;
});





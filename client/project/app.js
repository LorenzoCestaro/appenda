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

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('home', {
      templateUrl: 'project/home.html',
      url: '/',
    })
    
    .state('contacts', {
      controller: 'ContactsCtrl',
      controllerAs: 'ContactsCtrl',
      templateUrl: 'project/contacts/contacts.html',
      url: '/contacts'
    })
    
    .state('add-contact', {
      controller: 'AddContactCtrl',
      controllerAs: 'AddContactCtrl',
      templateUrl:'project/add-contact/add-contact.html',
      url: '/add-contact/:id',
    })
    
    .state('add-event', {
      controller: 'AddEventCtrl',
      controllerAs: 'AddEventCtrl',
      templateUrl:'project/add-event/add-event.html',
      url:'/add-event/:id',
    });
})

.run(($rootScope, $state) => {
  $rootScope.$state = $state;
});





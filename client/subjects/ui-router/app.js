angular.module('artoo', [
  'appbar',
  'ui.router',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'UI Router', url: 'subjects/ui-router'});
  })
  
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('home', {
        controller: function () {console.info('I am home')},
        template: '<h1>Home</h1>',
        url: '/',
    })
      
      .state('items', {
        templateUrl: 'subjects/ui-router/items/items.html',
        controller: 'ItemsCtrl',
        controllerAs: 'ItemsCtrl',
        url: '/items',
      })
      
      .state('items-details', {
        controller: 'ItemsDetailsCtrl',
        controllerAs: 'ItemsDetailsCtrl',
        templateUrl: 'subjects/ui-router/items/items-details.html',
        url: '/items/:code',
        // resolve: {
        //   item: function($stateParams, ItemsSrv) {
        //     return ItemsSrv.getDetails($stateParams.code);
        //   },
        // },
        // onEnter: function ($state, item) {
        //   if (!item) $state.go('items');
        // },
      })
      
      .state('contacts', {
        abstract: true,
        controller: 'ContactsCtrl',
        controllerAs: 'ContactsCtrl',
        data: {
          color: 'red',
        },
        // resolve properties are directly available as arguments for onEnter/onExit
        resolve: {
          color: function ($rootScope, $timeout) {
            console.info('resolve starts');
            return $timeout(function () {
              console.info('resolve ends');
              return 'pink';
            }, 1500);
          },
        },
        onEnter: function ($state, color) {
          console.info('onEnter function');
          if (color !== 'blue') console.log('wrong color');
        },
        onExit: function ($state, color) {
          console.info('onExit function');
        },
        templateUrl: 'subjects/ui-router/contacts/contacts.html',
        url: '/contacts',
      })
       // to access a child state the parent state needs to be resolved 
      .state('contacts.list', {
        templateUrl: 'subjects/ui-router/contacts/list/list.html',
        url: '/list',
      })
      
      .state('contacts.add', {
        template: '<h2>Add</h2>',
        url: '/add',
      })
      
      .state('contacts.query', {
        template: '<h2>Query</h2><div>{{params}}</div>',
        url: '/query?profession&sex',
        controller: function ($scope, $stateParams) {$scope.params = $stateParams},
      });
    // default state if state is not found or has prop abstract: true
    $urlRouterProvider.otherwise('/');
  });
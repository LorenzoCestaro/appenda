angular.module('artoo').service('UsersSrv', function ($resource) {
  // resource definition
  var User = $resource('http://jsonplaceholder.typicode.com/:typology/:id', {
    typology: 'users',      // set default URI values
  }, {                      // define custom methods
    retrievePosts: {        // custom method example to query the post collection
      isArray: true,
      method: 'GET',
      params: {             // define default paramenters within a custom method
        typology: 'posts',
      },
    },
  });
  
  this.create = function () {
    return new User();
  };
  
  this.get = function (params) {
    return User.get(params).$promise;
  };
  
  this.query = function () {
    return User.query().$promise;
  };
  
});
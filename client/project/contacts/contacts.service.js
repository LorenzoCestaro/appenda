angular.module('appenda').service('ContactsSrv', function ($resource) {
  
  this.maxId = 5;
  
  var Contact = $resource('/api/contacts/:id', {
    id: '@id',
  }, {});
  
  // public API
  
  this.query = function () {
    return Contact.query().$promise;
  };
  
  this.create = function () {
    return new Contact();
  };
  
});

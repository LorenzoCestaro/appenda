angular.module('appenda').service('ContactsSrv', function ($resource) {
  
  var Contact = $resource('/api/contacts/:id', {
    id: '@_id',
  }, {});
  
  // public API
  
  this.getContact = function (id) {
    return Contact.get({id: id}).$promise;
  };
  
  this.query = function () {
    return Contact.query().$promise;
  };
  
  this.create = function () {
    return new Contact();
  };
  
});

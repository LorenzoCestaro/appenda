angular.module('appenda').service('ContactsSrv', function () {
  
  var maxId = 1;
  
  var contacts = [{
    id: 0,
    name: 'Silvia',
    surname: 'Peveri',
    phone: '3333333333',
    email: 'silvia.peveri@gmail.com',
    img: 'http://placehold.it/20x20',
  },];
  
  this.create = function (formInput) {
    formInput.id = maxId;
    maxId = (maxId) ? maxId + 1 : maxId;
    contacts.push(formInput);
  };
  
  this.get = function () {
    return contacts;
  };
  
  this.update = function (formInput) {
    contacts.forEach(function (singleContact) {
      if (singleContact.id === formInput.id) {
        singleContact = formInput;
      }
    });
  };
  
  this.delete = function (id) {
    contacts.forEach(function (singleContact) {
      if (id === singleContact.id) {
        singleContact = undefined;
      }
    });
  };
  
});

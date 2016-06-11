angular.module('appenda').service('ContactsSrv', function () {
  
  // Define a maximum id highest id for the contacts objects
  var maxId = 1;
  
  // Initialize contacts list
  var contacts = [{
    id: 0,
    name: 'Silvia',
    surname: 'Peveri',
    phone: '3333333333',
    email: 'silvia.peveri@gmail.com',
    img: 'http://placehold.it/20x20',
  },];
  
  // create method to insert new contact in contacts list:
  // gets the compiled form fields converted in an object as input
  this.create = function (formInput) {
    formInput.id = maxId++;
    contacts.push(angular.copy(formInput));
  };
  

  
  // get method to access contacts list
  this.get = function () {
    return contacts;
  };
  
  // update method to edit a single contact
  // gets the compiled form fields converted in an object as input
  this.update = function (formInput) {
    contacts.forEach(function (singleContact) {
      if (singleContact.id === formInput.id) {
        singleContact = formInput;
      }
    });
  };
  
  // delete method to remove a contact from the list:
  // gets the id of the object to remove as input
  this.delete = function (id) {
    contacts.forEach(function (singleContact) {
      if (id === singleContact.id) {
        singleContact = undefined;
      }
    });
  };
  
});

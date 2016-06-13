angular.module('appenda').service('EventsSrv', function () {
  
  // Define the highest id for the events object
  var maxId = 1;
  
  var events = [{
    id: 0,
    title: 'Dentist',
    datetime: new Date(), // temporary
    location: 'via Napoli, 4 - Castel San Giovanni (PC)',
    bindedContacts: [],
    notes: 'pulizia dei denti',
  },];
  
  // Get method to access event list
  this.get = function () {
    return events;
  };
  
  // Create a method to insert new events in event list
  this.create = function (newEvent) {
    newEvent.id = maxId++;
    events.push(angular.copy(newEvent));
  };
  
  // Delete method to remove an event from the list
  // this.delete = function (id) {
  //   events.forEach(function (singleEvent) {
  //     if (singleEvent.id === id) {
  //       singleEvent = undefined; 
  //     }
  //   });
  // };
  
  // this.update = function (newEvent) {
  //   events.forEach(function (singleEvent) {
  //     if (singleEvent.id === newEvent.id) {
  //       singleEvent = newEvent;
  //     }
  //   });
  // };
  
  
  
});

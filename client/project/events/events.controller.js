angular.module('appenda').controller('EventsCtrl', function (EventsSrv) {
  this.EventsSrv = EventsSrv;
  console.log(EventsSrv.get())
  this.prop = 'asd';
});
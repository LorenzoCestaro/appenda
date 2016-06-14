angular.module('appenda').controller('EventsCtrl', function (EventsSrv, $mdDialog) {
  this.EventsSrv = EventsSrv;
  this.minDate = new Date();
  
  this.detailsFormat = function (data) {
    var text = '';
    data.forEach(function (singleData) {
      text += singleData.val + innerHTML('<br>');
    });
    return text;
  };
  
  this.openOffscreen = function (text) {
    $mdDialog.show(
      $mdDialog.alert()
        .clickOutsideToClose(true)
        .title('Details')
        .textContent(text)
        .ariaLabel('Offscreen Demo')
        .ok('Got it!')
        // Or you can specify the rect to do the transition from
        .openFrom({
          top: -50,
          width: 30,
          height: 80
        })
        .closeTo({
          left: 1500
        })
    );
  };
  
});

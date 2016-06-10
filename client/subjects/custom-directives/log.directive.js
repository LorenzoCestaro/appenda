// timeout is an out-of-the box angular service that forces angular's digestion
angular.module('artoo').directive('log', function ($timeout, PlayerSrv) {
  
  return {
    restric: 'A',
    replace: false,
    scope: {
      log: '@',
    },
    link: function (scope, elem, attrs) {
      elem.on('click', function ($e) {
        $timeout(function () {
          PlayerSrv.log(scope.log);
        });
      });
    },
  };
  
});
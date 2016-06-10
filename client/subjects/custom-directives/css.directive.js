angular.module('artoo').directive('cssAdder', function () {
  return {
    restrict: 'A',
    scope: {
      cssAdder: '=',
    },
    link: function (scope, elem) {
      var options = scope.cssAdder || {};
      
      var thickness = options.thickness || '1px';
      var typology = options.typology || 'solid';
      var color = options.color || 'grey';
      
      elem.css('border', [thickness, typology, color].join(' '));
    },
  };
});

// link: contains a function that runs each time the directive is loaded in an
// element of the view.
angular.module('artoo').service('RedditSrv', function ($resource) {
  var Reddit = $resource('https://www.reddit.com/search.json?q&sort', {
    sort: 'new',
  }, {
    query: {
      method: 'GET',
      isArray: false,
    }
  });
  
  this.query = function (params) {
    return Reddit.query(params).$promise;
  };
});
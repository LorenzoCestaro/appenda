angular.module('artoo').controller('UsersCtrl', function ($scope, UsersSrv) {
  
  $scope.loading = true;
  
  UsersSrv.query().then(function (data) {
    $scope.users = data;
    $scope.loading = false;
  }).catch(function (err) {
    console.error(err);
  });
  
  $scope.getDetails = function (id) {
    $scope.loading = true;
    UsersSrv.get({id: id}).then(function (data) {
      $scope.userDetails = data;
      $scope.user = data;
      $scope.loading = false;
    });
  };
  
  $scope.user = UsersSrv.create();
  
  $scope.remove = function (user) {
    $scope.loading = true;
    user.$remove({id: user.id}).then(function (data) {
      console.info('Removed');
      $scope.loading = false;
    }).catch();
  };
  
  $scope.save = function (user, form) {
    $scope.loading = true;
    user.createdAt = new Date();
    user.$save().then(function (data) {
      $scope.user = UsersSrv.create();
      form.$setPristine;
      $scope.loading = false;
      console.info(data);
    }).catch();
  };
  
});
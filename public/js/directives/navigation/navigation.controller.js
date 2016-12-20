(function() {
  angular.module('diversity_app')
         .controller("NavigationController", NavigationController);

  NavigationController.$inject = ['$scope', 'UserService'];

  function NavigationController($scope, UserService){
      $scope.isLoggedIn = UserService.isLoggedIn();

  }
}());

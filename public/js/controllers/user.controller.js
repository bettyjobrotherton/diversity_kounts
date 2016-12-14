(function() {

  angular.module('diversity_app')
         .controller('UserController', UserController);

  UserController.$inject = ['$scope', '$location', 'UserService', 'ReportService'];

  function UserController($scope, $location, UserService, ReportService){
    $scope.user = UserService.currentUser();


  
  }


}());

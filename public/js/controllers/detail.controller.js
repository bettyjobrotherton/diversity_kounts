(function() {

  angular.module('diversity_app')
         .controller('DetailController', DetailController);

  DetailController.$inject = ['$scope', 'UserService', 'ReportService'];

  function DetailController($scope, UserService, ReportService){
    $scope.user = UserService.currentUser();
    $scope.userReport = ReportService.getSelected();

    var userID = $scope.user.userID;

  }

}());

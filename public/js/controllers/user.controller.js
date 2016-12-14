(function() {

  angular.module('diversity_app')
         .controller('UserController', UserController);

  UserController.$inject = ['$scope', '$location', 'UserService', 'ReportService'];

  function UserController($scope, $location, UserService, ReportService){
    $scope.user = UserService.currentUser();
    $scope.wantToReport = false;
    $scope.startSurvey = startSurvey;
    $scope.makeReport = makeReport;
    $scope.required = true;
    $scope.cancel = cancel;

    function startSurvey(){
      $scope.wantToReport = true;
      return;
    }

    function makeReport(report){
      report.reporter = $scope.user.userID;

      ReportService.create(report);
      $scope.wantToReport = false;
    }

    function cancel(){
      $scope.report = {};
      $scope.wantToReport = false;
    }

  }


}());

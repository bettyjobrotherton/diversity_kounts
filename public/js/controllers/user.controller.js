(function() {

  angular.module('diversity_app')
         .controller('UserController', UserController);

  UserController.$inject = ['$scope', '$location', 'UserService', 'ReportService'];

  function UserController($scope, $location, UserService, ReportService){
    $scope.user = UserService.currentUser();
    $scope.wantToReport = false;
    $scope.startSurvey = startSurvey;
    $scope.makeReport = makeReport;
    $scope.viewReports = false;
    $scope.viewSurveys = viewSurveys;
    $scope.required = true;
    $scope.cancel = cancel;

    var userID = $scope.user.userID;

    $scope.$watch(function(){
      return ReportService.getAll();
    }, function(){
      $scope.reports =  ReportService.getPostsByUser(userId);
    });

    function startSurvey(){
      $scope.wantToReport = true;
      $scope.viewReports = false;
      return;
    }

    function makeReport(report){
      report.reporter = userID;


      ReportService.create(report);
      $scope.wantToReport = false;
      $scope.viewReports = true;
    }

    function viewSurveys(){
      $scope.viewReports = true;
      $scope.wantToReport = false;
    }

    function cancel(){
      $scope.report = {};
      $scope.wantToReport = false;
    }

  }


}());

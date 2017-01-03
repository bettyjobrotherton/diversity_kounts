(function() {

  angular.module('diversity_app')
         .controller('ReportsController', ReportsController);

  ReportsController.$inject = ['$scope', '$location', 'UserService', 'ReportService'];

  function ReportsController($scope, $location, UserService, ReportService){
    $scope.user = UserService.currentUser();
    $scope.userReports = [];
    $scope.viewDetail = viewDetail;

    var userID = $scope.user.userID;

    $scope.$watch(function(){
      return ReportService.getAll();
    }, function(){
      userID = $scope.user.userID;
      ReportService.pullAllByUser(userID);
      $scope.userReports = ReportService.getAllByUser();
    });

    function viewDetail(id){
      ReportService.getOne(id);
      $location.path('/report-detail');
    }

  }

}());

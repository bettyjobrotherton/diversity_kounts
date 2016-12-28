(function() {

  angular.module('diversity_app')
         .factory('ReportService', ReportService);

  ReportService.$inject = ['$http'];

  function ReportService($http){
    var reports = [];
    var userReports = [];
    var selectedReport;
    var baseURL = '/reports';

    return {
      pullAll: pullAll,
      getAll: getAll,
      getAllByUser: getAllByUser,
      getOne: getOne,
      getSelected: getSelected,
      create: create,
      update: update,
      delete: deleteOne
    };

    function pullAll(){
      $http.get(baseURL)
           .then(function(res){
             reports = res.data.reports;
           })
           .catch(function(err){
             console.log(err);
           });
    }

    function getAll(){
      return reports;
    }

    function getAllByUser(userID){
      $http.get(baseURL + '/byuser/' + userID)
           .then(function(res){
             userReports = res.data.reports;
             console.log(userReports);
           })
           .catch(function(err){
             console.log(err);
           });
    }

    function getOne(id){
      $http.get(baseURL + '/' + id)
           .then(function(res){
             selectedReport = res.report;
           })
           .catch(function(err){});
    }

    function getSelected(){
      return selectedReport;
    }

    function create(newReport){
      $http.post(baseURL, newReport)
           .then(function(res){
             getAllByUser(userID);
           })
           .catch(function(err){
             console.log(err);
           });
    }

    function update(id, newReportData, userID){
      $http.put(baseURL + id, newReportData)
           .then(function(){
             getAllByUser(userID);
           })
           .catch(function(err){
             console.log(err);
           });
    }

    function deleteOne(id, userID){
      $http.delete(baseURL + '/' + id)
           .then(function(){
             getAllByUser(userID);
           })
           .catch(function(err){
             console.log(err);
           });
    }

  }

}());

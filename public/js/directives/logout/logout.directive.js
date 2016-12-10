(function() {

  angular.module('diversity_app')
         .directive('logout', LogoutDirective);

  LogoutDirective.$inject = [];

  function LogoutDirective(){
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'js/directives/logout/logout.view.html',
      controller: 'LogoutController'
    };
  }

}());

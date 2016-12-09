(function() {

  angular.module('logout', LogoutDirective);

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

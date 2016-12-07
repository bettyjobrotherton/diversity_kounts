(function() {

  angular.module('diversity_app')
         .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'html/views/home.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      })
  }

}());

(function() {

  angular.module('diversity_app')
         .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: '/html/views/main.html',
        controller: 'MainController'
      })
      .when('/home', {
        templateUrl: '/html/views/main.html',
        controller: 'MainController'
      })
      .when('/main', {
        templateUrl: '/html/views/main.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

}());

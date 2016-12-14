(function() {

  angular.module('diversity_app')
         .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: '/html/views/main.html',
        controller: 'MainController',
        css: ["css/bootstrap.css", "css/style.css"],
        access: {
            restricted: false
          }
      })
      .when('/home', {
        templateUrl: '/html/views/main.html',
        controller: 'MainController',
        css: ["css/bootstrap.css", "css/style.css"],
        access: {
            restricted: false
          }
      })
      .when('/main', {
        templateUrl: '/html/views/main.html',
        controller: 'MainController',
        css: ["css/bootstrap.css", "css/style.css"],
        access: {
            restricted: false
          }
      })
      .when('/login', {
        templateUrl: '/html/views/login.html',
        controller: 'LoginController',
        css: ["css/bootstrap.css", "css/style.css"],
        access: {
            restricted: false
          }
      })
      .when('/signup', {
        templateUrl: '/html/views/signup.html',
        controller: 'SignupController',
        css: ["css/bootstrap.css", "css/signup.css"],
        access: {
            restricted: false
          }
      })
      .when('/user', {
        templateUrl: '/html/views/user.html',
        controller: 'UserController',
        css: ['css/bootstrap.css', 'css/usertemp.css'],
        access: {
            restricted: true
          }
      })
      .otherwise({
        redirectTo: '/'
      });
  }

}());

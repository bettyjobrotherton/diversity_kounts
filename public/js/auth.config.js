(function() {
  angular.module('diversity_app')
         .run(AuthConfig);

  AuthConfig.$inject = ['$rootScope', '$location', 'UserService'];

  function AuthConfig($rootScope, $location, UserService){
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute){
      if(nextRoute.access.restricted && !AuthService.isLoggedIn()){
        $location.path('/'); //sends user to the home page if they aren't logged in and try to go to a protected route
      }
    });
  }
}());

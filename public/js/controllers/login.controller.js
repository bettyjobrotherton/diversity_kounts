(function() {

  angular.module('diversity_app')
         .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$location', 'UserService'];

  function LoginController($scope, $location, UserService){
    $scope.login = login;
    $scope.required = true;

    function login(user){
      UserService.login(user)
                 .then(function(){
                   $location.path('/user');
                 })
                 .catch(function(){
                   $scope.user = {};
                   $location.path('/login');
                 });
    }
  }


}());

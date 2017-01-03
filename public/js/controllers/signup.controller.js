(function() {

  angular.module('diversity_app')
         .controller('SignupController', SignupController);

  SignupController.$inject = ['$scope', '$location'];

  function SignupController($scope, $location){
    $scope.signup = signup;
    $scope.required = true;

    function signup(user){
      UserService.signup(user)
                 .then(function(){
                   $location.path('/login');
                 })
                 .catch(function(){
                   $scope.user = {};
                   $location.path('/signup');
                 });
    }
  }
}());

(function() {

  angular.module('diversity_app')
         .factory('UserService', UserService);

  UserService.$inject = ['$http', '$window'];

  function UserService($http, $window){
    var localStorage = $window.localStorage;

    return {
      currentUser: currentUser,
      saveToken: saveToken,
      getToken: getToken,
      isLoggedIn: isLoggedIn,
      signup: signup,
      login: login,
      logout: logout
    };

    function currentUser(){
      if(isLoggedIn()){
        var token = getToken();
        var payload;

        payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);

        return {
          email: payload.email,
          userID: payload._id,
        };
      } else {
        return null;
      }
    }

    function saveToken(token){
      localStorage['diversity-token'] = token;
    }

    function getToken(){
      return localStorage['diversity-token'];
    }

    function isLoggedIn(){
      var token = getToken();
      var payload;

      if(token){
        payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);

        return payload.exp > Date.now()/1000;
      } else {
        return false;
      }
    }

    function signup(user){
      return $http.post('/users/signup', user);
    }

    function login(user){
      return $http.post('users/login', user)
                  .then(function(res){
                    var token = res.data.token;
                    saveToken(token);
                  });
    }

    function logout(){
      localStorage.removeItem('diversity-token');
    }
  }

}());

(function() {

  angular.module('diversity_app', ['ngRoute', 'routeStyles'])
         .filter('yesOrNo', function() {
           return function(input) {
             return input ? 'yes' : 'no' ;
           };
         });

}());

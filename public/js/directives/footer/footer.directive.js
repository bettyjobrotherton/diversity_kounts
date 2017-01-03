(function() {

  angular.module('diversity_app')
         .directive('footer', FooterDirective);

  FooterDirective.$inject = [];

  function FooterDirective(){
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'js/directives/footer/footer.view.html',
      controller: 'FooterController'
    };

  }

}());

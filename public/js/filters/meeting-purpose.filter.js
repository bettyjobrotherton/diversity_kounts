(function() {

  angular.module('diversity_app')
         .filter('viewMeetingPurpose', viewMeetingPurpose);

  viewMeetingPurpose.$inject = [];

  function viewMeetingPurpose(){
    return {
      changeOutput: changeOutput
    };

    function changeOutput(x){
      if(!x){
        return 'Hobby/Professional Development';
      } else {
        return 'Civic/Professional Development';
      }
    }
  }

}());

angular.module('aboutYouMod')
    .controller('controllers.aboutyou', ['$scope', '$http', '$state', function ($scope, $http, $state) {

        $http.get('http://prototype.motor.endsleigh.co.uk/itemlists')
           .success(function (data) {
               $scope.titles = data['titles'];
               $scope.days = data['days'];
               $scope.months = data['months'];
               $scope.maritalStatuses = data['maritalStatuses'];
               $scope.employmentStatuses = data['employmentStatuses'];
               $scope.licenceTypes = data['licenceTypes']; 
               $scope.licenceDurations = data['licenceDurations'];
           });

        $scope.nextPage = function () {
            $state.transitionTo('MoreDrivers');
    };

}]);
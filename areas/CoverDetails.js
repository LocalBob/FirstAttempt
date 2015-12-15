angular.module('app')
    .controller('controllers.coverdetails', ['$scope', '$http', '$state', function ($scope, $http, $state) {

        $scope.nextPage = function () {
            $state.transitionTo('YourOptions');
        };
}]);

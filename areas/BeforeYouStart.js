angular.module('app')
    .controller('controllers.beforeyoustart', ['$scope', '$http', '$state', function ($scope, $http, $state) {

        $scope.nextPage = function () {
            $state.transitionTo('YourCar');
    };

}]);


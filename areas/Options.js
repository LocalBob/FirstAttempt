angular.module('app')
    .controller('controllers.options', ['$scope', '$http', '$state', function ($scope, $http, $state) {

        $scope.nextPage = function () {
            $state.transitionTo('YourSummary');
        };

    }]);
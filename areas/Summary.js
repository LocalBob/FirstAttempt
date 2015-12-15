angular.module('app')
    .controller('controllers.summary', ['$scope', '$http', function ($scope, $http) {
        
        $scope.nextPage = function () {
            $location.path('').replace();
        };

    }]);
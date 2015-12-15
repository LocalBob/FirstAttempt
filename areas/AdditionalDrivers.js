angular.module('app')
    .controller('controllers.additionaldrivers', ['$scope', '$http', '$state', function ($scope, $http, $state) {

        $scope.nextPage = function () {
            $state.transitionTo('YourCover');
        };
        
}]);
angular.module('vehicleMod')
    .controller('controllers.yourcardetails', [
        '$scope', '$http', '$state', 'vehicleDataService', function($scope, $http, $state, vehicleDataService) {
            var car = {};
            $http.get('http://prototype.motor.endsleigh.co.uk/itemlists')
                .success(function(data) {
                    $scope.importTypes = data['importTypes'];
                });

            // retrieve the vehicle search results that we cached in the data service
            $scope.car = vehicleDataService.vehicleData();

            $scope.nextPage = function() {
                $state.transitionTo('YourDetails');
            };

            $scope.carSearch = function() {
                $state.transitionTo('YourCar');
            };

        }
    ]);
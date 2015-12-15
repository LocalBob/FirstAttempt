angular.module('vehicleMod')
    .controller('controllers.yourcarsearch', [
        '$scope', '$state', '$http', 'vehicleSearchService', 'vehicleDataService', function($scope, $state, $http, vehicleSearchService, vehicleDataService) {

            $scope.nextPage = function(reggie) {

                //strip whitespace and convert to upper for lookup in the mock
                reggie = reggie.replace(/\s+/g, '').toUpperCase();

                // create a promise to the vehicleSearchService http request
                vehicleSearchService.fetchVehicle(reggie)
                    .then(
                        function(responsedata) {
                            vehicleDataService.setVehicleData(responsedata);

                            $state.transitionTo('CarDetails');
                        },
                        function(error) {
                            console.log("Vehicle search failed");
                        })
                    .finally(console.log("Vehicle Search Promise executed"));

            };

        }
    ]);
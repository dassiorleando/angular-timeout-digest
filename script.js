/**
 * Simple script to show how to solve the scrope update
 * When using the native js TimeOut call
 * 
 * @author dassiorleando
 */
(function (angular) {
    'use strict';

    angular
        .module('myApp', []) // Define our angular app
        .controller('IndexController', IndexController); // We setup the controller

        IndexController.$inject = ['$scope', '$timeout'];

        function IndexController($scope, $timeout) {
            $scope.firstMessage = 'First message';
            $scope.secondMessage = 'Second message';

            // Let's update the first message after 2 seconds
            // Angular $timeout service
            $timeout(function() {
                $scope.firstMessage = 'First message updated';
                alert($scope.firstMessage);
            }, 2000);
            
            // Let's update the second message after 2 seconds
            // Native implementation
            setTimeout(function() {
                $scope.secondMessage = 'Second message updated';
                alert($scope.secondMessage);
            }, 2000);

            // Be aware that if the timeout was called in the second place the digest could be also updated
        }
})(window.angular);

'use strict';


angular.module('gardenApp')
    .controller('LoginCtrl', function ($scope, Auth, $location) {
        $scope.error = {};
        $scope.user = {};
        $scope.login = function (form) {
            Auth.login('password', {

                'email': $scope.user.email,
                'password': $scope.user.password
            },
            function (err,responseHeaders) {
                $scope.errors = {};
                if (!err) {
                    window.location.href = 'dashboardShell.html'
                    //$location.path('/dashboard');
                } else {
                    angular.forEach(err.errors, function (error, field) {
                        form[field].$setValidity('mongoose', false);
                        $scope.errors[field] = error.type;
                    });
                    $scope.error.other = err.message;
                }
            });
        };
    });



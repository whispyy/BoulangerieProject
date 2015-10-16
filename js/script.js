// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var mieDore = angular.module('mieDore', ['ngRoute']);

    // configure our routes
    mieDore.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    mieDore.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = '';
    });

    mieDore.controller('aboutController', function($scope) {
        $scope.message = '';
    });

    mieDore.controller('contactController', function($scope) {
        $scope.message = '';
    });
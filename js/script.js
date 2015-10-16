'use strict';

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    //var appControllers = angular.module('app.controllers', []);
    var mieDore = angular.module('mieDore', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    // configure our routes
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'pages/home.html',
        controller: 'homeCtrl'
    })
    .state('about', {
        url: '/',
        templateUrl: 'pages/about.html',
        controller: 'aboutCtrl'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'pages/contact.html',
        controller: 'contactCtrl'
    })}]);


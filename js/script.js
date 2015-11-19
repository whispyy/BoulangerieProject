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
        url: '/home',
        templateUrl: 'pages/home.html',
        controller: 'homeCtrl'
    })
    .state('produits', {
        url: '/produits',
        templateUrl: 'pages/produits.html',
        controller: 'produitsCtrl'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'pages/about.html',
        controller: 'aboutCtrl'
    })
    .state('client', {
        url: '/client',
        templateUrl: 'pages/client.html',
        controller: 'clientCtrl'
    })
    .state('livraison', {
        url: '/livraison',
        templateUrl: 'pages/livraison.html',
        controller: 'livraisonCtrl'
    })
    .state('payer', {
        url: '/payer',
        templateUrl: 'pages/payer.html',
        controller: 'payerCtrl'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'pages/contact.html',
        controller: 'contactCtrl'
    })}]);


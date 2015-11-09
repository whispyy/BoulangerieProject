'use strict';

mieDore.controller('clientCtrl',['$scope', '$state', function($scope,$state){


	console.log("clientCtrl");
	$scope.page = "client";

	$scope.client={};
	$scope.client.prenom = "Martin";
	$scope.client.nom = "Dupuis";	
 	$scope.client.adresse = "Rue de la Liberté, 75000 Paris";
 	$scope.client.mail = "martin@dupuis.com";
 	$scope.client.tel = "0606060606";

		
	var currentDateTime = function() {
    	var currentdate = new Date();
    	var datetime = currentdate.getDate() + '/' +
                   (currentdate.getMonth() + 1) + '/' +
                   currentdate.getFullYear() + ' ' +
                   currentdate.getHours() + ':' +
                   currentdate.getMinutes() + ':' +
                   currentdate.getSeconds();
    	return datetime;
  	}





}]);


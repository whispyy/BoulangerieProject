'use strict';

mieDore.controller('clientCtrl',['$scope', '$http', '$state', function($scope,$http,$state){


	console.log("clientCtrl");
	$scope.page = "client";

	$scope.client={};
	$scope.client.prenom = "Martin";
	$scope.client.nom = "Dupuis";	
 	$scope.client.adresse = "Rue de la Liberté, 75000 Paris";
 	$scope.client.mail = "martin@dupuis.com";
 	$scope.client.tel = "0606060606";
  $scope.client.date = currentDateTime;
		
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

  $scope.submitClient = function(){
    $http.post('/client', $scope.client, function(err,data){
      if(err) {
        console.log("Error on submitClient");
      }
    });
    
  }



}]);


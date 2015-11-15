'use strict';

mieDore.controller('clientCtrl',['$scope', '$state', '$http', function($scope,$state,$http){


	console.log("clientCtrl");
	$scope.page = "client";

	$scope.client={};
  $scope.client.nom = "Dupuis"; 
	$scope.client.prenom = "Martin";
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


  $scope.codeStatus = "";
  $scope.add = function() {
    $http({
      method: 'POST',
      url: 'srv.php',
      data: {
        nom: $scope.client.nom,
        prenom: $scope.client.prenom,
        adresse: $scope.client.adresse,
        mail: $scope.client.mail,
        tel: $scope.client.tel
      },
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(response) {
        console.log("nom : "+response);
    })
    .error(function(response) {
        console.log(response || "Request failed");
    }); 
  };


}]);


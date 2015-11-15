'use strict';

mieDore.controller('clientCtrl',['$scope', '$state', '$http', function($scope,$state,$http){
	$scope.page = "client";


		
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
      url: 'controllers/client.php',
      data: {
        nom: $scope.client.nom,
        prenom: $scope.client.prenom,
        adresse: $scope.client.adresse,
        mail: $scope.client.mail,
        tel: $scope.client.tel,
        date : currentDateTime(),
        prix : $scope.prixPanier
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


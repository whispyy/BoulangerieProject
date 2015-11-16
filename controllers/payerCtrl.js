'use strict';

mieDore.controller('payerCtrl',['$scope', '$state', '$http', function($scope,$state,$http){


	console.log("payerCtrl");
	$scope.page = "payer";
	/*
	$scope.add = function () {
		console.log($scope.idUser)
		console.log($scope.panier.id);
		console.log($scope.panier.quantite);
		$http({
			method: 'POST',
			url: 'controllers/panier.php',
			data:{
				client : $scope.idUser,
				produit : $scope.panier.id,
				quantite : $scope.panier.quantite
			},
			headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
		})
		.success(function(response){
			console.log("produits :"+response);
		})
		
	};
	*/
}]);


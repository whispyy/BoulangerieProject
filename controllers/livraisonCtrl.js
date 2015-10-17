'use strict';

mieDore.controller('livraisonCtrl',['$scope', '$state', function($scope,$state){


	console.log("livraisonCtrl");
	$scope.page = "livraison";

	$scope.menu = 0;

	$scope.selectedDrive = function(){
		$scope.menu=2;
	}

	$scope.selectedLivraison = function(){
		$scope.menu=1;
	} 


}]);


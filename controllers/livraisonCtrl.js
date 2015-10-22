'use strict';

mieDore.controller('livraisonCtrl',['$scope', '$state', function($scope,$state){


	console.log("livraisonCtrl");
	var date = new Date();
	$scope.heure = parseInt(date.getHours());
	$scope.minutes = parseInt(date.getMinutes());
	console.log($scope.minutes);
	console.log($scope.heure);



	$scope.listes = [];
		var min15 = $scope.minutes+15;
	if(min15 < 60)
	{
		$scope.listes.push({'id':1,'t':""+$scope.heure+"h "+(min15)+"min"});
	}
	else{
		var heure = $scope.heure+1;
		$scope.listes.push({'id':1,'t':heure+"h "+(min15+15%60)+"min"});
	}
	var min30 = $scope.minutes+30;
	if(min30 < 60)
	{
		$scope.listes.push({'id':2,'t':""+$scope.heure+"h "+min30+"min"});
	}
	else{
		var heure = $scope.heure+1;
		$scope.listes.push({'id':2,'t':heure+"h "+min30%60+"min"});
	}
	var min45 = $scope.minutes+45;
	if(min45 < 60)
	{
		$scope.listes.push({'id':3,'t':$scope.heure+"h "+min45+"min"});
	}
	else{
		var heure = $scope.heure+1;
		$scope.listes.push({'id':3, 't':heure+"h "+min45%60+"min"});
	}
	var heure = $scope.heure+1;
	$scope.listes.push({'id':4,'t':heure+"h "+$scope.minutes+"min"});
	console.log($scope.liste);
    $scope.liste = $scope.listes[2]; // red

	$scope.page = "livraison";


	$scope.menu = 0;

	$scope.selectedDrive = function(){
		$scope.menu=2;
	}

	$scope.selectedLivraison = function(){
		$scope.menu=1;
	} 




}]);


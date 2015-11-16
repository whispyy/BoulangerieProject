'use strict';

mieDore.controller('livraisonCtrl',['$scope', '$state', '$http', function($scope,$state,$http){

	$scope.test={};
	var date = new Date();
	$scope.heure = parseInt(date.getHours());
	$scope.minutes = parseInt(date.getMinutes());



	var i;
	$scope.listes = [];
	for(i=6;i<=21;i++)
	{
		$scope.listes.push({'id':i,'t':i+"h"});
	}
	
	$scope.minutes = [];
	$scope.minutes.push({'id':0,'t':"0 min"});
	$scope.minutes.push({'id':1,'t':"15 min"});
	$scope.minutes.push({'id':2,'t':"30 min"});
	$scope.minutes.push({'id':3,'t':"45 min"});

	$scope.page = "livraison";


	$scope.menu = 0;

	$scope.selectedDrive = function(){
		$scope.menu=2;
	}

	$scope.selectedLivraison = function(){
		$scope.menu=1;
	} 

	$scope.test=function(){
		console.log($scope.test.valueHour);
	}

$scope.add = function() {
	$scope.temps = ($scope.test.valueHour.t+$scope.test.valueMinutes.t)
    $http({
      method: 'POST',
      url: 'controllers/livraison.php',
      data: {
        client: $scope.idUser,
        mode: $scope.menu,
        heure: $scope.temps
      },
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(response) {
        console.log("mode : "+response);
    })
    .error(function(response) {
        console.log(response || "Request failed");
    }); 
  };



}]);


'use strict';

mieDore.controller('payerCtrl',['$scope', '$state', '$http', function($scope,$state,$http){


	console.log("payerCtrl");
	$scope.page = "payer";
	$scope.add = function () {
		$http({
			method: 'POST',
			url: 'controllers/panier.php'
			data:{

			},
			headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
		})
		.success(function(response){
			console.log("pid :"+response);
		})
		
	};

}]);


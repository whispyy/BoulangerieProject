'use strict';

mieDore.controller('appCtrl',['$scope', '$state', function($scope,$state){



	$scope.message = "appCtrl";

	

	$scope.go = function(path) {
		console.log(path);
		$state.go(path);
	};	
 	
	
		
	





}]);


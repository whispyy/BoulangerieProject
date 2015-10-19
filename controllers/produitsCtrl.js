'use strict';

mieDore.controller('produitsCtrl',['$scope', '$state', function($scope,$state){


	console.log("produitsCtrl");
	$scope.page = "produits";

	$scope.boolBoulangerie = false;
	$scope.boulangerie =
	['baguette aux cereales',
	'baguette paillard',
	'baguette parisienne',
	'baguette pavot',
	'batard blé',
	'batard cereales',
	'Marguerite au pain blanc',
	'mont royal'];

	$scope.boolPatisserie = true;
	$scope.patisserie =
	['gateau',
	'individuelle',
	'tarte'];
	$scope.gateau = [
		'Foret noire',
		'Fraisier',
		'Grand mille feuilles',
		'Grand paris brest',
		'Mousse abricot',
		'Mousse fruits rouges',
		'Senseo'];
	$scope.individuelle =
		[''
		];



}]);

'use strict';

mieDore.controller('produitsCtrl',['$scope', '$state', function($scope,$state){


	console.log("produitsCtrl");
	$scope.page = "produits";

	$scope.boolBoulangerie = false;
	$scope.fboulangerie = function() {
		$scope.boolBoulangerie = !$scope.boolBoulangerie;
	};
	$scope.boulangerie =
	['baguette aux cereales',
	'baguette paillard',
	'baguette parisienne',
	'baguette pavot',
	'batard blé',
	'batard cereales',
	'Marguerite au pain blanc',
	'mont royal'];

	$scope.boolPatisserie = false;
	$scope.fpatisserie = function() {
		$scope.boolPatisserie = !$scope.boolPatisserie;
	};
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
		['Eclair au café',
		'Eclair au chocolat',
		'Flan',
		'Meringue chocolat',
		'Petit mille feuilles',
		'Religieuse au café',
		'Religieuse au chocolat'
		];
	$scope.tarte =
		['Tarte aux fraises',
		'Tarte aux pommes',
		'Tarte carachoc',
		'Tarte au citron-meringue'];


}]);

'use strict';

mieDore.controller('produitsCtrl',['$scope', '$state', function($scope,$state){


	console.log("produitsCtrl");
	$scope.page = "produits";

	$scope.boolBoulangerie = false;
	$scope.fboulangerie = function() {
		$scope.boolBoulangerie = !$scope.boolBoulangerie;
		$scope.boolPatisserie = false;
		$scope.boolSandwich = false;
		$scope.boolViennoiserie = false;

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
		$scope.boolBoulangerie = false;
		$scope.boolPatisserie = !$scope.boolPatisserie;
		$scope.boolSandwich = false;
		$scope.boolViennoiserie = false;

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

	$scope.boolSandwich = false;
	$scope.fsandwich = function() {
		$scope.boolBoulangerie = false;
		$scope.boolPatisserie = false;
		$scope.boolSandwich = !$scope.boolSandwich;
		$scope.boolViennoiserie = false;
	};
	$scope.sandwich =
		['jambon emmental',
		'jambon serrano',
		'poulet et fromage de chèvre',
		'poulet mayonnaise',
		'sauomn et fromage frais',
		'thon mayonnaise'];

	$scope.boolViennoiserie = false;
	$scope.fviennoiserie = function() {
		$scope.boolBoulangerie = false;
		$scope.boolPatisserie = false;
		$scope.boolSandwich = false;
		$scope.boolViennoiserie = !$scope.boolViennoiserie;
	};
	$scope.viennoiserie =
		['abricotier',
		'amandier',
		'brioche au chocolat',
		'brioche nature',
		'brioche orange et chocolat blanc',
		'chausson au pommes',
		'chocolatine',
		'croissant',
		'escargot raisin',
		'patte d ours',
		'tentation',
		'torsade au chocolat'];
		
}]);

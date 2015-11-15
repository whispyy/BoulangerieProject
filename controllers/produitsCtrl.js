'use strict';

mieDore.controller('produitsCtrl',['$scope', '$state','$stateParams', function($scope,$state,$stateParams){


	console.log("produitsCtrl");
	$scope.page = "produits";

	//Attention il faudra faire le get en fonction du paramètre reçu
	if($stateParams.category == 1)
	{
		//on fait le get sur de la boulangerie
	}

	if($stateParams.category == 2)
	{
		//on fait le get sur du sandwich
	}

	if($stateParams.category == 3)
	{
		//on fait le get sur de la viennoiserie
	}

	if($stateParams.category == 4)
	{
		//on fait le get sur de la patisserie
	}



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

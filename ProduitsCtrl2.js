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
		[{
			id : 001,
			nom : 'baguette aux cereales',
			prix : ,
			desc : '',
		},
		{
			id : 002,
			nom : 'baguette tradition',
			prix : ,
			desc : '',
		},
		{
			id : 003,
			nom : 'baguette',
			prix : ,
			desc : '',
		},
		{
			id : 004,
			nom : 'baguette pavot',
			prix : ,
			desc : '',
		},
		{
			id : 005,
			nom : 'pain au blé',
			prix : ,
			desc : '',
		},
		{
			id : 006,
			nom : 'pains aux céréales',
			prix : ,
			desc : '',
		},
		{
			id : 007,
			nom : 'Marguerite sésame pavot',
			prix : ,
			desc : '',
		},
		{
			id : 008,
			nom : 'mont royal',
			prix : ,
			desc : '',
		}];
	$scope.boolPatisserie = false;
	$scope.fpatisserie = function() {
		$scope.boolBoulangerie = false;
		$scope.boolPatisserie = !$scope.boolPatisserie;
		$scope.boolSandwich = false;
		$scope.boolViennoiserie = false;

	};
	$scope.patisserie =
		[{
			id : 101,
			nom : 'gateau',
		},
		{
			id : 102,
			nom : 'individuelle',
		},
		{
			id : 103,
			nom : 'tarte',
		}];
	$scope.gateau = 
		[{
			id : 111,
			nom : 'Foret noire',
			prix : ,
			desc : '',
		},
		{
			id : 112,
			nom : 'Fraisier',
			prix : ,
			desc : '',
		},
		{
			id : 113,
			nom : 'Grand mille feuilles',
			prix : ,
			desc : '',
		},
		{
			id : 114,
			nom : 'Grand paris brest',
			prix : ,
			desc : '',
		},
		{
			id : 115,
			nom : 'Mousse abricot',
			prix : ,
			desc : '',
		},
		{
			id : 116,
			nom :  'Mousse fruits rouges',
			prix : ,
			desc : '',
		},
		{
			id : 117,
			nom :  'Senseo',
			prix : ,
			desc : '',
		}];
	$scope.individuelle =
		[{
			id : 121,
			nom : 'Eclair au café',
			prix : ,
			desc : '',
		 },/*etc*/
		'Eclair au chocolat',
		'Flan',
		'Meringue chocolat',
		'Petit mille feuilles',
		'Religieuse au café',
		'Religieuse au chocolat'
		];
	$scope.tarte =
		[{
			id : 131,
			nom : 'Tarte aux fraises',
			prix : ,
			desc : '',
		}, /*etc*/
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
		[{
			id : 201 ,
			nom : 'jambon emmental',
			prix : ,
			desc : '',
		}/*etc*/
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
		[{
			id : 301,
			nom : 'abricotier',
			prix : ,
			desc : '',
		}, /*etc*/
		'amandier',
		'brioche au chocolat',
		'brioche nature',
		'brioche orange et chocolat blanc',
		'chausson au pommes',
		'Pain au chocolat',
		'croissant',
		'escargot raisin',
		'patte d ours',
		'tentation',
		'torsade au chocolat'];
		
}]);

		
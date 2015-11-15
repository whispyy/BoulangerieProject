'use strict';

mieDore.controller('produitsCtrl',['$scope', '$state', function($scope,$state){


	console.log("produitsCtrl");
	$scope.page = "produits";

	//Attention il faudra faire le get en fonction du paramètre reçu

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
		 },
		 {
		 	id : 122,
		 	nom : 'Eclair au chocolat',
		 	prix : ,
		 	desc : '',
		 },
		 {
		 	id :  123,
		 	nom : 'Flan',
		 	prix : ,
		 	desc : '',
		 },
		 {
		 	id : 124,
		 	nom : 'Meringue chocolat',
		 	prix : ,
		 	desc : '',
		 },
		 {
		 	id : 125,
		 	nom : 'Petit mille feuilles',
		 	prix : ,
		 	desc : '',
		 },
		 {
		 	id : 126,
		 	nom : 'Religieuse au café',
		 	prix : ,
		 	desc :'',
		 },
		 {
		 	id : 127,
		 	nom : 'Religieuse au chocolat',
		 	prix : ,
		 	desc : '',
		}];
	$scope.tarte =
		[{
			id : 131,
			nom : 'Tarte aux fraises',
			prix : ,
			desc : '',
		},
		{
			id : 132,
			nom : 'Tarte aux pommes',
			prix : ,
			desc : '',
		},
		{
			id : 133,
			nom : 'Tarte carachoc',
			prix : ,
			desc : '',
		},
		{
			id : 134,
			nom : 'Tarte au citron-meringue',
			prix : ,
			desc : '',
		}];

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
		},
		{
			id : 202,
			nom : 'jambon serrano',
			prix : ,
			desc : '',
		},
		{
			id : 203,
			nom : 'poulet et fromage de chèvre',
			prix : ,
			desc : '',
		},
		{
			id : 204,
			nom : 'poulet mayonnaise',
			prix : ,
			desc : '',
		},
		{
			id : 205,
			nom : 'sauomn et fromage frais',
			prix : ,
			desc : '',
		},
		{
			id : 206,
			nom : 'thon mayonnaise'
			prix : ,
			desc : '',
		}];

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
		},
		{
			id : 302,
			nom : 'amandier',
			prix : ,
			desc : '',
		},
		{
			id : 303,
			nom : 'brioche au chocolat',
			prix : ,
			desc : '',
		},
		{
			id : 304,
			nom : 'brioche nature',
			prix : ,
			desc : '',
		},
		{
			id : 305,
			nom : 'brioche orange et chocolat blanc',
			prix : ,
			desc : ''
		},
		{
			id : 306,
			nom : 'chausson au pommes',
			prix : ,
			desc : '',
		},
		{
			id : 307,
			nom : 'Pain au chocolat',
			prix : ,
			desc : '',
		},
		{
			id : 308,
			nom : 'croissant',
			prix : ,
			desc : '',
		},
		{
			id : 309,
			nom : 'escargot raisin',
			prix : ,
			desc : '',
		},
		{
			id : 310
			nom : 'patte d ours',
			prix ,
			desc : '',
		},
		{
			id : 311,
			nom : 'tentation',
			prix : ,
			desc : '',
		},
		{
			id : 312,
			nom : 'torsade au chocolat',
			prix : ,
			desc : '',
		}];
		
}]);

		
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
	$scope.boulangerie = [];
	var boul1={'id':901,'nom':'baguette aux cereales','prix':1};
	var boul2={'id':902,'nom':'baguette tradition','prix':1};
	var boul3={'id':903,'nom':'baguette','prix':1};
	var boul4={'id':904,'nom':'baguette pavot','prix':1};
	var boul5={'id':905,'nom':'pain au blé','prix':1};
	var boul6={'id':906,'nom':'pains aux céréales','prix':1};	
	var boul7={'id':907,'nom':'Marguerite sésame pavot','prix':1};
	var boul8={'id':908,'nom':'mont royal','prix':1};

	$scope.boulangerie.push(boul1);
	$scope.boulangerie.push(boul2);
	$scope.boulangerie.push(boul3);
	$scope.boulangerie.push(boul4);
	$scope.boulangerie.push(boul5);
	$scope.boulangerie.push(boul6);
	$scope.boulangerie.push(boul7);
	$scope.boulangerie.push(boul8);

	
	$scope.boolPatisserie = false;
	$scope.fpatisserie = function() {
		$scope.boolBoulangerie = false;
		$scope.boolPatisserie = !$scope.boolPatisserie;
		$scope.boolSandwich = false;
		$scope.boolViennoiserie = false;

	};
	$scope.patisserie =
		[{
			'id':101,
			'nom':'gateau',
		},
		{
			'id':102,
			'nom':'indiv'id'uelle',
		},
		{
			'id':103,
			'nom':'tarte',
		}];
	$scope.gateau = 
		[{
			'id':111,
			'nom':'Foret noire',
			'prix':1,
		},
		{
			'id':112,
			'nom':'Fraisier',
			'prix':1,
		},
		{
			'id':113,
			'nom':'Grand mille feuilles',
			'prix':1,
		},
		{
			'id':114,
			'nom':'Grand paris brest',
			'prix':1,
		},
		{
			'id':115,
			'nom':'Mousse abricot',
			'prix':1,
		},
		{
			'id':116,
			'nom': 'Mousse fruits rouges',
			'prix':1,
		},
		{
			'id':117,
			'nom': 'Senseo',
			'prix':1,
		}];
	$scope.indiv'id'uelle =
		[{
			'id':121,
			'nom':'Eclair au café',
			'prix':1,
		 },
		 {
		 	'id':122,
		 	'nom':'Eclair au chocolat',
		 	'prix':1,,
		 },
		 {
		 	'id': 123,
		 	'nom':'Flan',
		 	'prix':1,,
		 },
		 {
		 	'id':124,
		 	'nom':'Meringue chocolat',
		 	'prix':1,,
		 },
		 {
		 	'id':125,
		 	'nom':'Petit mille feuilles',
		 	'prix':1,,
		 },
		 {
		 	'id':126,
		 	'nom':'Religieuse au café',
		 	'prix':1,
		 	desc :'',
		 },
		 {
		 	'id':127,
		 	'nom':'Religieuse au chocolat',
		 	'prix':1,,
		}];
	$scope.tarte =
		[{
			'id':131,
			'nom':'Tarte aux fraises',
			'prix':1,
		},
		{
			'id':132,
			'nom':'Tarte aux pommes',
			'prix':1,
		},
		{
			'id':133,
			'nom':'Tarte carachoc',
			'prix':1,
		},
		{
			'id':134,
			'nom':'Tarte au citron-meringue',
			'prix':1,
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
			'id':201 ,
			'nom':'jambon emmental',
			'prix':1,
		},
		{
			'id':202,
			'nom':'jambon serrano',
			'prix':1,
		},
		{
			'id':203,
			'nom':'poulet et fromage de chèvre',
			'prix':1,
		},
		{
			'id':204,
			'nom':'poulet mayonnaise',
			'prix':1,
		},
		{
			'id':205,
			'nom':'saumon et fromage frais',
			'prix':1,
		},
		{
			'id':206,
			'nom':'thon mayonnaise'
			'prix':1,
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
			'id':301,
			'nom':'abricotier',
			'prix':1,
		},
		{
			'id':302,
			'nom':'amandier',
			'prix':1,
		},
		{
			'id':303,
			'nom':'brioche au chocolat',
			'prix':1,
		},
		{
			'id':304,
			'nom':'brioche nature',
			'prix':1,
		},
		{
			'id':305,
			'nom':'brioche orange et chocolat blanc',
			'prix':1
		},
		{
			'id':306,
			'nom':'chausson au pommes',
			'prix':1,
		},
		{
			'id':307,
			'nom':'Pain au chocolat',
			'prix':1,
		},
		{
			'id':308,
			'nom':'croissant',
			'prix':1,
		},
		{
			'id':309,
			'nom':'escargot raisin',
			'prix':1,
		},
		{
			'id':310
			'nom':'patte d ours',
			'prix' ,
		},
		{
			'id':311,
			'nom':'tentation',
			'prix':1,
		},
		{
			'id':312,
			'nom':'torsade au chocolat',
			'prix':1,
		}];*/
		
}]);

		
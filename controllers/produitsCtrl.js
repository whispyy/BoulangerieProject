'use strict';

mieDore.controller('produitsCtrl',['$scope', '$state', function($scope,$state){

	console.log("produitsCtrl");
	$scope.page = "produits";

	$scope.boulangerie = [];
	$scope.boulangerie.push({'id':901,'nom':'Baguette aux cereales','prix':1.10});
	$scope.boulangerie.push({'id':902,'nom':'Baguette tradition','prix':1.00});
	$scope.boulangerie.push({'id':903,'nom':'Baguette','prix':0.95});
	$scope.boulangerie.push({'id':904,'nom':'Baguette pavot','prix':1.10});
	$scope.boulangerie.push({'id':905,'nom':'Pain au blé','prix':1.80});
	$scope.boulangerie.push({'id':906,'nom':'Pain aux céréales','prix':1.95});	
	$scope.boulangerie.push({'id':907,'nom':'Marguerite sésame pavot','prix':2.20});
	$scope.boulangerie.push({'id':908,'nom':'Mont royal','prix':1.95});
	$scope.boulangerie.push({'id':909,'nom':'Campagnard','prix':2.50});
	$scope.boulangerie.push({'id':910,'nom':'Boule bio','prix':1.30});

	$scope.gateau = 
		[{
			'id':111,
			'nom':'Foret noire',
			'prix':21.00
		},
		{
			'id':112,
			'nom':'Fraisier',
			'prix':21.00
		},
		{
			'id':113,
			'nom':'Grand mille feuilles',
			'prix':18.00
		},
		{
			'id':114,
			'nom':'Grand paris brest',
			'prix':18.00
		},
		{
			'id':115,
			'nom':'Mousse abricot',
			'prix':21.00
		},
		{
			'id':116,
			'nom': 'Mousse fruits rouges',
			'prix':21.00
		},
		{
			'id':117,
			'nom': 'Senseo',
			'prix':18.00
		}];
	$scope.individuelle =
		[{
			'id':121,
			'nom':'Eclair au café',
			'prix':2.20
		 },
		 {
		 	'id':122,
		 	'nom':'Eclair au chocolat',
		 	'prix':2.20
		 },
		 {
		 	'id': 123,
		 	'nom':'Flan',
		 	'prix':2.30
		 },
		 {
		 	'id':124,
		 	'nom':'Meringue chocolat',
		 	'prix':2.50
		 },
		 {
		 	'id':125,
		 	'nom':'Petit mille feuilles',
		 	'prix':2.50
		 },
		 {
		 	'id':126,
		 	'nom':'Religieuse au café',
		 	'prix':2.40
		 },
		 {
		 	'id':127,
		 	'nom':'Religieuse au chocolat',
		 	'prix':2.40
		}];
	$scope.tarte =
		[{
			'id':131,
			'nom':'Tarte aux fraises',
			'prix':18.00
		},
		{
			'id':132,
			'nom':'Tarte aux pommes',
			'prix':12.00
		},
		{
			'id':133,
			'nom':'Tarte carachoc',
			'prix':21.00
		},
		{
			'id':134,
			'nom':'Tarte au citron-meringue',
			'prix':15.60
		}];


		$scope.sandwich =
		[{
			'id':201 ,
			'nom':'Jambon-emmental',
			'prix':3.50
		},
		{
			'id':202,
			'nom':'Jambon-serrano',
			'prix':3.50
		},
		{
			'id':203,
			'nom':'Poulet et Chèvre',
			'prix':3.50
		},
		{
			'id':204,
			'nom':'Poulet mayonnaise',
			'prix':3.50
		},
		{
			'id':205,
			'nom':'Saumon et fromage frais',
			'prix':3.80
		},
		{
			'id':206,
			'nom':'Thon mayonnaise',
			'prix':3.50
		}];


		$scope.viennoiserie =
		[{
			'id':301,
			'nom':'abricotier',
			'prix':1.50
		},
		{
			'id':302,
			'nom':'amandier',
			'prix':2.00
		},
		{
			'id':303,
			'nom':'brioche au chocolat',
			'prix':1.00
		},
		{
			'id':304,
			'nom':'brioche nature',
			'prix':0.95
		},
		{
			'id':305,
			'nom':'brioche orange',
			'prix':1.10
		},
		{
			'id':306,
			'nom':'chausson au pommes',
			'prix':1.00
		},
		{
			'id':307,
			'nom':'Pain au chocolat',
			'prix':0.95
		},
		{
			'id':308,
			'nom':'croissant',
			'prix':0.90
		},
		{
			'id':309,
			'nom':'escargot raisin',
			'prix':1.80
		},
		{
			'id':310,
			'nom':'patte d ours',
			'prix':1.50
		},
		{
			'id':311,
			'nom':'tentation',
			'prix':2.00
		},
		{
			'id':312,
			'nom':'torsade au chocolat',
			'prix':2.00
		}];
}]);

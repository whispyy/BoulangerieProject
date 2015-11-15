'use strict';

mieDore.controller('appCtrl',['$scope', '$http', '$state', function($scope,$http,$state){

	$scope.client={};
  	$scope.client.nom = "Dupuis"; 
	$scope.client.prenom = "Martin";
 	$scope.client.adresse = "Rue de la Liberté, 75000 Paris";
 	$scope.client.mail = "martin@dupuis.com";
 	$scope.client.tel = "0606060606";

	$scope.idUser = $scope.client.nom+$scope.client.prenom;
	$scope.prixPanier = 0;
	$scope.panier=[];

	/*
	$scope.recupid = function(){
		$http({
     	  method: 'POST',
    	  url: 'controllers/client.php',
      	  data: {
        	nom: $scope.client.nom,
        	prenom: $scope.client.prenom,
        	prix : $scope.prixPanier
      },
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(response) {
        console.log("idUser : "+response);
        $scope.idUser = response;
    })
    .error(function(response) {
        console.log(response || "Request failed");
    }); 
    };
	*/
	//------- Pour ajouter au besoin des articles au panier -----------------//

	/*var item={'id':1,'nom' : "Baguette Parisienne", 'prix': 2.10, 'quantite' : 2};
	var item2={'id':13,'nom' : "sandwich jambon beurre", 'prix': 1.50, 'quantite' : 1};
	$scope.panier.push(item);
	$scope.panier.push(item2);*/

	$scope.populaires = [];
	var pop1={'id':1,'nom' : "Baguette Parisienne", 'prix': 2.10,'src':"ressources/img/Boulangerie/baguette_parisienne.jpg"};
	var pop2={'id':3,'nom' : "S. Jambon Fromage", 'prix': 1.80,'src':"ressources/img/Sandwich/Sandwich-jambon-emmental.jpg"};
	var pop3={'id':2,'nom' : "Flan", 'prix': 3.10,'src':"ressources/img/Patisserie/individuelle/Flan.png"};
	$scope.populaires.push(pop1);
	$scope.populaires.push(pop2);
	$scope.populaires.push(pop3);

	$scope.go = function(path) {
		console.log(path);
		$state.go(path);
	};	
 	
 	$scope.calculPrixPanier = function()
 	{
 		$scope.prixPanier=0;
 		angular.forEach($scope.panier, function(item) {
 			$scope.prixPanier = parseFloat($scope.prixPanier) + (parseFloat(item.quantite)*parseFloat(item.prix));
 		});
 	}

 	$scope.addPanier=function(item){
 		var newItem = {};
 		newItem.id=item.id;
 		newItem.nom = item.nom;
 		newItem.prix=item.prix;
 		newItem.quantite=parseInt(item.quantite);
 		angular.forEach($scope.panier, function(panier) {
 			if(panier.id == item.id)
 			{
 				panier.quantite = parseInt(panier.quantite) + parseInt(item.quantite);
 				item.quantite=0;
 			}
 		});
 		if(item.quantite != 0)
 		{
 			$scope.panier.push(newItem);
 		}
 		$scope.calculPrixPanier();	
 	}

 	$scope.delPanier=function(item){
 		var i=0;
 		for (i; i < $scope.panier.length; i++) 
		{ 
		   if($scope.panier[i].id == item.id)
 			{
 				if(item.quantite>1)
 				{
 					$scope.panier[i].quantite = $scope.panier[i].quantite-1;
 				}
 				else if(item.quantite==1)
 				{
 					$scope.panier.splice(i,1);
 				}
 				$scope.calculPrixPanier();
 			}
		} 
 	}

	
		
	





}]);


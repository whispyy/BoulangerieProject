'use strict';

mieDore.controller('appCtrl',['$scope', '$http', '$state', function($scope,$http,$state){
		

	$scope.client={};
  	$scope.client.nom = ""; 
	$scope.client.prenom = "";
 	$scope.client.adresse = "";
 	$scope.client.mail = "";
 	$scope.client.tel = "";

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
	var pop1={'id':903,'nom' : "Baguette", 'prix': 0.95,'src':"ressources/img/Boulangerie/903.jpg"};
	var pop2={'id':201,'nom' : "Jambon-Emmental", 'prix': 3.50,'src':"ressources/img/Sandwich/201.jpg"};
	var pop3={'id':307,'nom' : "Pain au chocolat", 'prix': 0.95,'src':"ressources/img/Viennoiserie/307.jpg"};
	$scope.populaires.push(pop1);
	$scope.populaires.push(pop2);
	$scope.populaires.push(pop3);

	$scope.go = function(path) {
		$state.go(path);
		$scope.idUser = $scope.client.nom+$scope.client.prenom;
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
 	$scope.delPanier2=function(item){
 		var quantite=1;
 		var i=0;
 		for (i; i < $scope.panier.length; i++) 
		{ 
		   if($scope.panier[i].id == item.id)
 			{
 				if($scope.panier[i].quantite>1)
 				{
 					$scope.panier[i].quantite = $scope.panier[i].quantite-1;
 				}
 				else if($scope.panier[i].quantite==1)
 				{
 					$scope.panier.splice(i,1);
 				}
 				$scope.calculPrixPanier();
 			}
		} 
 	}
	$scope.panierToString=function(){
		var i=0;
		$scope.panierString="";
		for (i;i<$scope.panier.length;i++){
			$scope.panierString=$scope.panierString+"("+$scope.panier[i].id+","+$scope.panier[i].quantite+")";
		}
		console.log($scope.panierString);
		return $scope.panierString;
	}
	



}]);


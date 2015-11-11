'use strict';

mieDore.controller('clientCtrl',['$scope', '$http', '$state', function($scope,$http,$state){


	console.log("clientCtrl");
	$scope.page = "client";

	$scope.client={};
	$scope.client.prenom = "Martin";
	$scope.client.nom = "Dupuis";	
 	$scope.client.adresse = "Rue de la Liberté, 75000 Paris";
 	$scope.client.mail = "martin@dupuis.com";
 	$scope.client.tel = "0606060606";
  $scope.client.date = currentDateTime;
		
	var currentDateTime = function() {
    	var currentdate = new Date();
    	var datetime = currentdate.getDate() + '/' +
                   (currentdate.getMonth() + 1) + '/' +
                   currentdate.getFullYear() + ' ' +
                   currentdate.getHours() + ':' +
                   currentdate.getMinutes() + ':' +
                   currentdate.getSeconds();
    	return datetime;
  	}

  var method = 'POST';
  var inserturl = 'http://localhost:8080/insertangularmongouser';
  $scope.submitClient = function(){
    var formData = {
      'prenom' : $scope.prenom,
      'nom' : $scope.nom,
      'adresse' : $scope.adresse,
      'mail' : $scope.mail,
      'tel' : $scope.tel,
      'date' : $scope.date
    };

  var jdata = 'mydata='+JSON.stringify(formData);
  $http({
    method : method,
    url : inserturl,
    data : jdata,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    cache: $templateCache
  }),
  success(function(response){
    console.log("succes");
    $scope.codeStatus = response.data;
  }),
  error(function(response){
    console.log("erreur");
    $scope.codeStatus = respons || "Requete échouée";
  });
  $scope.list = function(){
    var url = 'http://localhost:8080/getangularusers';
    $http.get(url).success(function(data){
      $scope.client = data;
    });
  };
  $scope.list();
}



var server = require('./server');
var mongoose = require('mongoose');
var express = require('express');

//var app = express();

/*
mongoose.connect('mongodb://localhost/BoulangerieProject', function(err) {
  if (err) { throw err; }
});
*/
/*creer schema produit*/
var produitSchema = new mongoose.Schema({
	id : Number,
	nom : String,
	prix : Number,
	desc : String
});
var ProduitModel = mongoose.model('produits', produitSchema);
var ProduitModel = mongoose.model('produits');

/*creer panier*/
var panierSchema = new mongoose.Schema({
	idPanier : Number,
	idProduit : Number,
	quantite : Number
})
var PanierModel = mongoose.model('panier', panierSchema);
var PanierModel = mongoose.model('panier');

var monPanier = new PanierModel({ idPanier : 00 });
//save panier dans mongodb
monPanier.save(function (err) {
  if (err) { throw err; }
  console.log('Panier creer');
});


/*creer client*/
var clientSchema = new mongoose.Schema({
	idClient : Number,
	idPanier : Number,
	prenom : String,
	nom : String,
	adresse : String,
	mail : String,
	tel : String
})
var ClientModel = mongoose.model('client', clientSchema);
var ClientModel = mongoose.model('client');

var monClient = new ClientModel({ idClient : 00 });
//save panier dans mongodb
monClient.save(function (err) {
  if (err) { throw err; }
  console.log('Client creer');
  mongoose.connection.close();
});


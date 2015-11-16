<?PHP
//récupération des données
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
//info client
@$prenom = $request->prenom;
@$nom = $request->nom;
@$adresse = $request->adresse;
@$mail = $request->mail;
@$tel = $request->tel;
@$date = $request->date;
@$prix = $request->prix;
@$panier = $request->panier;

//connexion a db
$conn = mysqli_connect("localhost","jf2","chronopain","boulangerie");

//test de connexion
if ($conn->connection_error){
	die('Connexion impossible: ' . mysql_error());
}

//inserer les données dans la table client
mysqli_query($conn,"INSERT INTO client (prenom,nom,adresse,mail,tel,date,prix,panier)
VALUES ('$prenom',
	 '$nom',
	 '$adresse',
	 '$mail',
	 '$tel',
	 '$date',
	 '$prix',
	 '$panier')");

//fermer la connexion et renvoyer le nom inséré
mysqli_close($conn);
echo $nom;
?>
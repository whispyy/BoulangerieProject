<?PHP
//récupération des données
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

@$prenom = $request->prenom;
@$nom = $request->nom;
@$adresse = $request->adresse;
@$mail = $request->mail;
@$tel = $request->tel;

//connexion a db
$conn = mysqli_connect("localhost","jf2","chronopain","boulangerie");

//test de connexion
if ($conn->connection_error){
	die('Connexion impossible: ' . mysql_error());
}

//inserer les données dans la table client
mysqli_query($conn,"INSERT INTO client (prenom,nom,adresse,mail,tel)
VALUES ('$prenom',
	 '$nom',
	 '$adresse',
	 '$mail',
	 '$tel')");
//fermer la connexion et renvoyer le nom inséré
mysql_close($conn);
echo $nom;
?>
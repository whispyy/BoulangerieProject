<?PHP
//récupération des données
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

@$client = $request->client;
@$mode = $request->mode;
@$heure =$request->heure;

//connexion a db
$conn = mysqli_connect("localhost","jf2","chronopain","boulangerie");

//test de connexion
if ($conn->connection_error){
	die('Connexion impossible: ' . mysql_error());
}

//inserer les données dans la table client
mysqli_query($conn,"INSERT INTO livraison (client,mode,heure)
VALUES ('$client',
	    '$mode',
	    '$heure')");
mysql_close($conn);
echo $mode;
?>
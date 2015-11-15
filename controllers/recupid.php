<?PHP
//connexion base
$conn = mysqli_connect("localhost","jf2","chronopain","boulangerie");
//test de connexion
if ($conn->connection_error){
	die('Connexion impossible: ' . mysql_error());
}
//recup des données passées en parametre
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$prenom = $request->prenom;
@$nom = $request->nom;
@$prix = $request->prix;

//recherche de l'id
$query = mysqli_query($conn, "SELECT cid FROM client 
							  WHERE nom = $nom AND 
		  							prenom = $prenom");
$rep = mysqli_fetch_assoc($query);
echo $rep['cid'];
mysqli_close($conn);




?>
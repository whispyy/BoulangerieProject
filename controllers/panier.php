<?PHP
//connexion base
$conn = mysqli_connect("localhost","jf2","chronopain","boulangerie");
//test de connexion
if ($conn->connection_error){
	die('Connexion impossible: ' . mysql_error());
}
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

@$client = $request->client;
@$produit = $request->produit;
@$quantite = $request->quantite;

mysqli_query($conn,"INSERT INTO livraison (produit,quantite,client)
VALUES ('$produit',
	    '$client',
	    '$quantite')");
mysql_close($conn);
echo $produit;
?>
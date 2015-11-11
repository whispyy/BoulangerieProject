var application_root = __dirname,
	express = require('express'),
	path = require('path');


var app = express();

var databaseUrl = "db";
var collections = ["client"]
var mongojs = require('mongojs');
var db = mongojs(databaseUrl, collections)


//Config
/*
app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(application_root, "public")));
	app.use(express.errorHandler({ dumbExceptions : true, showStack: true }));
});
*/
app.get('/index.html', function (req,res){
	req.send('Wesh Tanguy jai mis en place un serveur de ouuuuf');
});

app.get('/getangularusers', function (req, res) {
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	db.things.find('', function (err, users){
		if (err || !users)
			console.log("Wesh jai pas trouvé d'utilisateur, et alors");
		else
		{
			res.writeHead(200, {'Content-Type' : 'application/json'});
			str = '[';
			users.forEach(function(user){
				str = str + { "nom" : "' + client.nom +'"},' +\n';
			});
			str = str.trim();
			str = str.substring(0, str.length - 1);
			str = str + ']';
			res.end( str);
		}
	});
});

app.post('/insertangularmongouser', function (req, res){
	console.log("POST: ");
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	console.log(req.body);
	console.log(req.body.mydata);
	var jsonData = JSON.parse(req.body.mydata);
	db.things.save({prenom : jsonData.prenom, nom : jsonData.nom, adresse : jsonData.adresse, mail : jsonData.mail, tel : jsonData.tel, date : jsonData.date},
		function(err, saved){
			if(err || !saved)
				res.end("Client non sauvegardé");
			else
				res.end("Client sauvegardé");
		});
});


 app.listen(8080);
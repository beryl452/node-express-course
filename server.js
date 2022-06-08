const express = require ('express');
const app = express();
// La méthode app.listen démarrera le serveur localement sur 
//le port que vous donnez comme premier argument 
//(dans ce cas l'url de base est : http://localhost:8000 ) 
app.listen(8000, function(){
console.log('listening on port 8000');
});
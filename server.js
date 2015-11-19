var express = require('express');
var app = express();
var port = 3000;
var authenticate = require('./authenticate.js');



app.use(authenticate.logger);

app.get('/about', authenticate.requireAuthentication, function(req, res){
   res.send('About Us!!'); 
});


app.use(express.static(__dirname + '/public'));
app.listen(port, function(){
    console.log('express server started on port : '+port);
});
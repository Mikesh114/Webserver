var express = require('express');
var app = express();
var port = 3000;
var authenticate = {requireAuthentication: function(req, res, next){
    console.log('private route hit');
    next();
},
                    logger: function(req, res, next) {
                        var datetime = new Date().toString();
                     console.log(datetime+ '  '+ req.method + ' ' + req.originalUrl);
                        next();
                    }
                   };

app.use(authenticate.logger);

app.get('/about', authenticate.requireAuthentication, function(req, res){
   res.send('about us'); 
});


app.use(express.static(__dirname + '/public'));
app.listen(port, function(){
    console.log('express server started on port : '+port);
});
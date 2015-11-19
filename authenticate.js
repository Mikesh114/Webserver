
module.exports = {requireAuthentication: function(req, res, next){
    console.log('private route hit');
    next();
},
                    logger: function(req, res, next) {
                        var datetime = new Date().toString();
                     console.log(datetime+ '  '+ req.method + ' ' + req.originalUrl);
                        next();
                    }
                   };
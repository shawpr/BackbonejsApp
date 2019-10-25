var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080... ' +
        'go to http://localhost:8080/index.html');
});

//node server.js
//open browser and paste this link to view the application
//http://localhost:8080/index.html
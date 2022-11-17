var express = require('express');
var app = express();

var staticContentDir = process.argv[2] || __dirname;
console.log(`### Content dir = '${staticContentDir}'`);


app.use('/', express.static(staticContentDir));


app.get('/api/config', function (req, res) {
    var data = {
        service1endpoint: process.env.SERVICE_API1_ENDPOINT || 9010
    };

    res.send(data);
});


app.use('*', function(req, res) {
   res.sendFile(`${staticContentDir}/index.html`);
});

var port = process.env.PORT || 19000;
var server = app.listen(port, function () {
    var port = server.address().port;
    console.log(`### Server listening on ${server.address().port}`);
});

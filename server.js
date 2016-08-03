var express = require('express');


var app = express();


var port = 3000;


app.use(express.static('public'));

// app.get('*', function(req, res) {
//     res.sendFile(path.join( __dirname, './index.html'));
// });
app.listen(port, function() {
    console.log("Started server on port ", port);
});

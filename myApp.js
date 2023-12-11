let express = require('express');
let app = express();



console.log("Hello World");
/*app.get("/",function(req, res) {
    res.send('Hello Express');
  });*/

app.use('/public', express.static(process.cwd() + '/public'));
app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })

app.get("/json", (req, res) => {
let message = "Hello json";
(process.env.MESSAGE_STYLE == "uppercase") ? message=message.toUpperCase() : message=message; res.json({"message": message});
});

































 module.exports = app;

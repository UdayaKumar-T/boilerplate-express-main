let express = require('express');
let app = express();
var bodyParser = require('body-parser');

console.log("Hello World");
/*app.get("/",function(req, res) {
    res.send('Hello Express');
  });*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.route('/post').post(function(req,res){
    //console.log("request body "+req.bodyParser.firstName);
    let firstName = req.body.firstName;
    let lastName  = req.body.lastName;
    console.log("name : "+firstName);
    console.log("lastName : "+lastName);
    var jsonObj = {'name': firstName+ " " +lastName};
    res.json(jsonObj);
});


app.use('/public', express.static(process.cwd() + '/public'));

// --> 7)  Mount the Logger middleware here
app.use((req, res, next) => {
    let outputValue = `${req.method} ${req.path} - ${req.ip}`
    console.log(outputValue) 
     next();
});

app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })

app.get("/json", (req, res) => {
let message = "Hello json";
(process.env.MESSAGE_STYLE == "uppercase") ? message=message.toUpperCase() : message=message; res.json({"message": message});
});


app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    console.log('Current time = ' + req.time);
    next();
  },function(req, res) {
    res.json({time: req.time}); 
  });


  app.route('/:word/echo')
  .get(function(req, res) {
    let word = req.params.word;
        res.json({"echo":word});
  });


app.route('/name')
.get(function(req,res){
    var firstName = req.query.first;
    var lastName = req.query.last;
    var jsonObj = {'name': firstName+ " " +lastName};
    res.send(jsonObj);
  });




























 module.exports = app;

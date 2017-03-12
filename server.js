const express  		 = require('express'),
	  app            = express(),
	  mongoose       = require('mongoose'),
	  port           = process.env.PORT || 8080,
	  bodyParser     = require('body-parser'),
	  methodOverride = require('method-override'),
	  path 			 = require('path');


// DB CONFIG
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mean2_taches')
  .then(() =>  console.log('connection db réussie'))
  .catch((err) => console.error(err));	  


app.use(express.static(path.join(__dirname, 'dist')));  

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json()); 
app.use(bodyParser.json({type: 'application/vnd.api+json'})); 
app.use(methodOverride('X-HTTP-Method-Override'));


// routing
const index = require('./server/routes');
app.use('/api/v1', index);

// APPLI
app.get('*', function (req, res) {
    res.sendFile(__dirname +'/dist/index.html'); 
});

app.listen(port, () => {
	console.log(`lets go port ${port}`);
});
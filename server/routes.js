const express = require('express'),
      router  = express.Router(),
       Tache  = require('./taches.model');


//  GET ALL
router.get('/taches', (req, res) => {
	Tache.find((err, taches) => {
		((err) ? res.send(err) : res.json(taches));
	});
});

// GET one 
router.get('/taches/:id', (req, res) => {
	Tache.findById(req.params.id, (err, tache) => {
		((err) ? res.send(err) : res.json(tache));
	});
});

// POST
router.post('/taches', function(req, res , next){
	var tache = req.body;
	if(!tache.texte || (tache.texte).length < 2){
		res.status(400);
		res.json({
			'error':'Invalid Data'
		});
	}else{
		Tache.create(tache, function(err, _tache){
			((err) ? res.send(err) : res.json(_tache));
		});
	}
});


// PUT
router.put('/taches/:id', (req, res) => {
	var data = { texte: req.body.texte };
	if(!req.body.texte){
		res.status(400);
		res.json({
			'error':'Invalid Data'
		});
	}else{
		Tache.findByIdAndUpdate(req.params.id, data, (err, tache) => {
			((err) ? res.send(err) : res.json(tache));
		});
	}
});

//DELETE
router.delete('/taches/:id', (req, res) => {
	Tache.remove({ _id: req.params.id }, (err, tache) => {
		((err) ? res.send(err) : res.json(tache));
	});
});

module.exports = router;
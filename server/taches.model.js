const mongoose = require('mongoose');

module.exports = mongoose.model('Tache', {
	texte: {
		type: String
	}
});
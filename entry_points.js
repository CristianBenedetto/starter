const path = require('path');
const fs = require('fs');

// check if file exists: fs.existsSync('/path/to/file')
/*
	Aggiungi un oggetto alla variabile "obj" qui sotto per aggiungere un entry point
	- chiave -> il nome del bundle che vogliamo ottenere
	(e che avrà la forma nomeBundle.bundle.js)
	- valore -> il percorso del file javascript sorgente
*/

const obj = {
	index: path.join(path.resolve(__dirname, 'src/js'), 'index.js'),
	aboutus: path.join(path.resolve(__dirname, 'src/js'), 'about.js'),
	contactus: path.join(path.resolve(__dirname, 'src/js'), 'contact_us.js')
}

module.exports = obj
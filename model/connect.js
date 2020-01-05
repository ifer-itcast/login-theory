const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/theory', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Successful connection to database'))
	.catch(err => console.error(err, 'Failed to connect database'));

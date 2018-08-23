const models = require('express').Router();

module.exports = models.get('/', (req, res) => {
	res.status(200).json({ message: 'Connected!' });
})
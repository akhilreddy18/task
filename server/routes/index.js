const routes = require('express').Router();
const invoice = require('./invoice');

routes.use('/invoice', invoice);
routes.get('/', (req, res) => {
	res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
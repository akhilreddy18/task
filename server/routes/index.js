const routes = require('express').Router();
const invoice = require('./invoice');
const test = require('./test');

routes.get('/', (req, res) => {
	res.status(200).json({ message: 'Connected!' });
});
routes.use('/invoice', invoice);
routes.use('/invoice/test', test);

module.exports = routes;
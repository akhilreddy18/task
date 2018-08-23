const models = require('express').Router();
const data = require('../../data.json');

module.exports = models.get('/', (req, res) => {
	let id = Number(req.query.invoiceId);
	let foundInvoice="";

	if(id) {foundInvoice = data.find(m => m.invoiceId === id);}
	else {foundInvoice = data;}
	res.status(200).json({ foundInvoice });  
});
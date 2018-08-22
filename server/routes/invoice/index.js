const models = require('express').Router();
const data = require('../../data.json');

module.exports = models.get('/', (req, res) => {
	console.log(req.query)

	if(req.query=""){
		const keyInvoiceId = Number(req.query.invoiceId)
		 const foundInvoice = data.find(m => m.invoiceId === keyInvoiceId);
		 res.status(200).json({ foundInvoice });
	}
	else {
		 const allInvoices = data;
 		 res.status(200).json({ allInvoices });
	}
 
});
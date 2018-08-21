const data = require('../../data.json');

module.exports = (req, res) => {
  const keyInvoiceId = Number(req.params.invoiceId);
  const foundInvoice = data.find(m => m.invoiceId === keyInvoiceId);

  res.status(200).json({ foundInvoice });
};
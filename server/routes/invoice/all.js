const data = require('../../data.json');

module.exports = (req, res) => {
  const allInvoices = data;

  res.status(200).json({ allInvoices });
}; 
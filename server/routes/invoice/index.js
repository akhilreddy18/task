const models = require('express').Router();
const all = require('./all');
const single = require('./single');

models.get('/:invoiceId', single);
models.get('/', all);

module.exports = models;
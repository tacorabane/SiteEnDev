const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const customerCtrl = require('../controllers/customer');

router.post('/', custommerCtrl.createCustomer);

router.get('/:id', customerCtrl.getOneCustomer);

router.put('/:id', customerCtrl.modifyCustomer);

router.delete('/:id', customerCtrl.deleteCustomer);

router.get('/', custommerCtrl.getAllCustomer);

module.exports = router;

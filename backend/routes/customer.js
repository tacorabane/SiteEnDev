const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const customerCtrl = require('../controllers/customer');
const auth = require('../middleware/auth');

router.post('/', auth, customerCtrl.createCustomer);

router.get('/:id', auth, customerCtrl.getOneCustomer);

router.put('/:id', auth, customerCtrl.modifyCustomer);

router.delete('/:id', auth, customerCtrl.deleteCustomer);

router.get('/', auth, customerCtrl.getAllCustomer);

module.exports = router;

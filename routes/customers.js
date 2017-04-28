const express = require('express');
const router = express.Router();

Customer = require('../models/customer');
// Get all customers
router.get('/', (req, res) => {
    Customer.getCustomers((err, customers) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(customers);
    });
});

// Get single customer
router.get('/:id', (req, res) => {
    Customer.getCustomer(req.params.id, (err, customer) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(customer);
    });
});

// add
router.post('/', (req, res) => {
    const customer = req.body;
    Customer.getCustomer(customer, (err, customer) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(customer);
    });
});

// update
router.post('/:id', (req, res) => {
    const id = req.param.id;
    const customer = req.body;
    Customer.updateCustomer(id, customer, (err, customer) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(customer);
    });
});

// Delete
router.delete('/:id', (req, res) => {
    const id = req.param.id;
    Customer.removeCustomer(id, (err, customer) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(customer);
    });
});



module.exports = router;
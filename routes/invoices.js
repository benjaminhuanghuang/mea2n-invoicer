const express = require('express');
const router = express.Router();

Invoice = require('../models/invoice');

// Get all invoices
router.get('/', (req, res) => {
    Invoice.getInvoices((err, invoices) => {
        if (err) {
            res.send(err);
        }
        res.json(invoices);
    });
});

// Get customers invoices
router.get('/customer/:customer_id', (req, res) => {
   Invoice.getCustomerInvoices(req.params.customer_id, (err, invoices) => {
        if (err) {
            res.send(err);
        }
        res.json(invoices);
    });
});

// Add 
router.post('/', (req, res) => {
    const invoice = req.body;
    Invoice.addInvoice(invoice, (err, invoices)=>{
        if(err){
            res.send(err);
        }
        res.json(invoice);
    });
});

// Update 
router.get('/:id', (req, res) => {
    const id = req.param.id;
    const invoice = req.body;
    Invoice.updateInvoice(id, invoice, {}, (err, invoices)=>{
        if(err){
            res.send(err);
        }
        res.json(invoice);
    });
});

// Delete 
router.get('/:id', (req, res) => {
    const id = req.param.id;
    Invoice.removeInvoice(id, invoice, (err, invoices)=>{
        if(err){
            res.send(err);
        }
        res.json(invoice);
    });
});

module.exports = router;
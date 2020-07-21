const Customer = require('../models/customer');

exports.createCustomer = (req, res, next) => {
    const customer = new Customer({
    ...req.body
    });

    customer.save()
    .then(() => {
        res.status(201).json({
            message: "Object saved successfully !"
        });
    })
    .cacth((error) => {
        res.status(400).json({error: error});
    });
};

exports.getAllCustomer = (req, res, next) => {
    Customer.find()
        .then((customer) => {
            res.status(200).json(customer)
        })
        .catch((error) => {
            res.status(400).json({
                error: error
        });
    });
};

exports.getOneCustomer = (req, res, next) => {
    Customer.findOne({_id: req.params.id})
    .then((customer) => {
        res.status(200).json(customer);
    })
    .catch((error) => {
        res.status(404).json({
            error: error
        });
    });
};

exports.modifyCustomer = (req, res, next) => {
    const customer = new Customer({
    ...req.body
    });

    Customer.updateOne({_id: req.params.id}, customer).then(() => {
        res.status(201).json({
            message: "Customer " + req.params.id + " updated successfully !"
        });
    })
    .catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.deleteCustomer = (req, res, next) => {
    Customer.deleteOne({_id: req.params.id}).then(() => {
        res.status(200).json({
            message: "Deleted !"
        });
    })
    .catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

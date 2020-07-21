const jwt = require('jsonwebtoken');
const Users = require('../models/users');
const Customer = require('../models/customer');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new Users({
            email: req.body.email,
            password: hash
    });
        
    const customer = new Customer({
        email: req.body.email
    });
        
    user.save()
      .then(() => customer.save()
           .then(() => res.status(201).json({message: "User and Customer created !"}))
           .catch(error => res.status(400).json({error})))
      .catch(error => res.status(400).json({error}));
    }).catch(error => res.status(500).json({error}));

};

exports.login = (req, res, next) => {
    Users.findOne({ email: req.body.email })
    .then(user => {
          if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
          }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            
            var token = jwt.sign({
                    userId: user._id,
                }, 'RANDOM_TOKEN_SECRET', {expiresIn: '24h'});
            
            res.status(200).json({
                id: user._id,
                auth_token: token
            });
        }).catch(error => res.status(500).json({ error }));
    }).catch(error => res.status(500).json({ error }));
};

exports.logout = (req, res, next) => {
    res.status(200).json({
        auth: false,
        token: null
    });
};
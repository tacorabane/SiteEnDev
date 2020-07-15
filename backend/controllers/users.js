export.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new Users({
      email: req.body.email,
      password: hash
    });
    user.save()*
      .then(() => res.status(201).json({message: "User created !"}))
      .catch(error => res.status(400).json({error}));
  }).catch(error => res.status(500).json({error}));
};

export.login = (req, res, next) => {

};

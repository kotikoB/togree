const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { signUpValidation, signInValidation } = require('../utils/validations');

const { User } = require('../db/models');

const signUp = async (req, res) => {
    const { error } = signUpValidation(req.body);
    if (error) return res.status(400).send(error.details);

    // check if user exists
    const user = await User.getOne({ email: req.body.email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const { userName, email } = req.body;
    try {
        const newUser = new User(userName, email, hashedPassword);
        const savedUser = await newUser.save();
        res.status(201).json({
            savedUser,
            message: 'Your account has been created successfully!'
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({ err });
    }
};

const signIn = async (req, res) => {
    const { error } = signInValidation(req.body);
    if (error) return res.status(400).send(error.details);

    // fetch user from DB
    const user = await User.getOne({ email: req.body.email });
    if (!user) return res.status(400).send("Sorry that email doesn't exist");

    try {
        // verify password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).json({ message: 'The password is invalid' });

        // assign token
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.TOKEN_SECRET);
        res.header('token', token).json({ Authorization: token });
    } catch (err) {
        res.status(401).json({ err });
    }
};

module.exports = { signUp, signIn };

const Joi = require('joi');

// signUp validation
const signUpValidation = (data) => {
    const validationSchema = Joi.object().keys({
        userName: Joi.string().min(3),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required()
    });
    return validationSchema.validate(data);
};

// signIn validation
const signInValidation = (data) => {
    const validationSchema = Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required()
    });
    return validationSchema.validate(data);
};

module.exports = { signUpValidation, signInValidation };

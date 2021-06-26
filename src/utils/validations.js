const Joi = require('joi');

// register validation
const registerValidation = (data) => {
    const validationSchema = Joi.object().keys({
        firstName: Joi.string().min(3),
        lastName: Joi.string().min(3),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required()
    });
    return validationSchema.validate(data);
};

// login validation
const loginValidation = (data) => {
    const validationSchema = Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required()
    });
    return validationSchema.validate(data);
};

module.exports = { registerValidation, loginValidation };

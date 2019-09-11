const Joi = require("@hapi/joi");

const schemas = {
    authSchema: Joi.object().keys({
        email: Joi.string()
            .email({ minDomainSegments: 2 })
            .required(),
        password: Joi.string()
            .regex(/^[a-zA-Z0-9]{3,30}$/)
            .required()
    })
};

module.exports = {
    validatSignup: function({ email, password }) {
        const result = Joi.validate({ email, password }, schemas.authSchema);

        return result;
    }
};

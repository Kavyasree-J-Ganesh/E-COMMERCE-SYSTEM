import Joi from '@hapi/joi';

export const newAdminValidator = (req, res, next) => {
    const schema = Joi.object({
        firstname: Joi.string().min(4).required(),
        lastname: Joi.string().min(4),
        phonenumber: Joi.number().min(9).required(),
        email: Joi.string().min(4).required(),
        password: Joi.string().min(4).required(),
        companyname: Joi.string().min(4).required(),

    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        next(error);
    } else {
        req.validatedBody = value;
        next();
    }
};

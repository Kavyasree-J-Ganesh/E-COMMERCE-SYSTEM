import Joi from '@hapi/joi';

export const productValidator = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        image: Joi.string().required(),
        realPrice: Joi.number().required(),
        discountPercentage: Joi.number().min(0).max(100).required(),
        description: Joi.string().required(),
        manufacturer: Joi.string().required(),
        quantity: Joi.number().required(),
        category: Joi.string().required(),
        buyprice: Joi.number().min(4).required()
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        next(error);
    } else {
        req.validatedBody = value;
        next();
    }
};

import Joi from "joi-oid"

const schema = Joi.object({
    name: Joi
        .string()
        .required()
        .min(3)
        .max(20)
        .messages({
            'string.min':'el nombre debe tener al menos 3 caracteres',
            'string.max':'el nombre debe tener máximo 20 caracteres'
        }),
    description: Joi
        .string()
        .required()
        .min(20)
        .max(300),
    admin_id: Joi
        .objectId()
        .required()
        .messages({
            'invalid':'admin_id no es un objectId'
        })
})

export default schema
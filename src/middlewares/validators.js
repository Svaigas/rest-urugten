const { celebrate, Joi, Segments } = require('celebrate')
const mongoIdRegexExpr = /^[0-9a-fA-F]{24}$/

export const validateGET = celebrate({
  [Segments.QUERY]: Joi.object({
    page: Joi.number().min(0),
    perPage: Joi.number().min(1)
  })
})

export const validatePOSTmovies = celebrate({
  [Segments.BODY]: Joi.object({
    title: Joi.string().required(),
    id: Joi.string(),
    type: Joi.string(),
    year: Joi.string()
  })
})

export const validatePOSTcomments = celebrate({
  [Segments.BODY]: Joi.object({
    author: Joi.string().required(),
    body: Joi.string().required(),
    movieId: Joi
        .string()
        .regex(mongoIdRegexExpr)
        .required()
        .error(new Error('Invalid Object ID'))
  })
})

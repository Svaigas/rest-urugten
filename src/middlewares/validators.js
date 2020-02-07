const { celebrate, Joi, Segments } = require('celebrate')
const mongoIdRegexExpr = /^[0-9a-fA-F]{24}$/
const emailRegexExpr = new RegExp([
  '[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9]',
  '(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])',
  '?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'
].join(''))

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
    author: Joi
        .string()
        .regex(emailRegexExpr)
        .required()
        .error(new Error('Invalid author email')),
    body: Joi.string().required(),
    movieId: Joi
        .string()
        .regex(mongoIdRegexExpr)
        .required()
        .error(new Error('Invalid Object ID'))
  })
})

export const validatePOSTlogin = celebrate({
  [Segments.BODY]: Joi.object({
    email: Joi
        .string()
        .regex(emailRegexExpr)
        .required()
        .error(new Error('Invalid email'))
  })
})

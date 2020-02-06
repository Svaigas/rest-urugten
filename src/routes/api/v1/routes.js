import express from 'express'
const routerV1 = new express.Router()
import { catchError } from '../../../middlewares/helpers'
import { validateGET, validatePOSTmovies, validatePOSTcomments } from '../../../middlewares/validators'

import * as moviesV1 from './movies'
import * as commentsV1 from './comments'

// POST routes
routerV1.post('/movies', validatePOSTmovies, catchError(moviesV1.postMovieData))
routerV1.post('/comments', validatePOSTcomments, catchError(commentsV1.postCommentData))

// GET routes
routerV1.get('/movies', validateGET, catchError(moviesV1.getMoviesList))
routerV1.get('/comments', validateGET, catchError(commentsV1.getCommentsList))

module.exports = routerV1

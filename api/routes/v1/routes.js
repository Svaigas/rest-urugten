import express from 'express'
const routerV1 = new express.Router()
import { catchError, verifyToken } from '../../middlewares/helpers'
import {
  validateGET,
  validatePOSTmovies,
  validatePOSTcomments,
  validatePOSTlogin
} from '../../middlewares/validators'

import * as MoviesController from '../../controllers/movies'
import * as CommentsController from '../../controllers/comments'
import * as LoginController from '../../controllers/login'

// POST routes
routerV1.post('/login', validatePOSTlogin, catchError(LoginController.loginUser))
routerV1.post('/movies', verifyToken, validatePOSTmovies, catchError(MoviesController.postMovieData))
routerV1.post('/comments', verifyToken, validatePOSTcomments, catchError(CommentsController.postCommentData))

// GET routes
routerV1.get('/movies', verifyToken, validateGET, catchError(MoviesController.getMoviesList))
routerV1.get('/comments', verifyToken, validateGET, catchError(CommentsController.getCommentsList))

module.exports = routerV1

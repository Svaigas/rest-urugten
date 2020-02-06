import express from 'express'
const routerV1 = new express.Router()
import { catchError, verifyToken } from '../../../middlewares/helpers'
import {
  validateGET,
  validatePOSTmovies,
  validatePOSTcomments,
  validatePOSTlogin
} from '../../../middlewares/validators'
import jwt from 'jsonwebtoken'

import * as moviesV1 from './movies'
import * as commentsV1 from './comments'

// POST routes
routerV1.post('/login', validatePOSTlogin, catchError(loginUser))
routerV1.post('/movies', verifyToken, validatePOSTmovies, catchError(moviesV1.postMovieData))
routerV1.post('/comments', verifyToken, validatePOSTcomments, catchError(commentsV1.postCommentData))

// GET routes
routerV1.get('/movies', verifyToken, validateGET, catchError(moviesV1.getMoviesList))
routerV1.get('/comments', verifyToken, validateGET, catchError(commentsV1.getCommentsList))

export function loginUser(req, res) {
  const { body } = req
  const user = { email: body.email }
  jwt.sign({ user }, 'secret', { expiresIn: '30m' }, (err, token) => {
    if (err) res.sendStatus(500).json({ err })
    else res.json({ token })
  })
}

module.exports = routerV1

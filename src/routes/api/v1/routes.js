import express from 'express'
const routerV1 = new express.Router()
import { catchError } from '../../../middlewares/helpers'

import * as moviesV1 from './movies'

// POST routes
routerV1.post('/movies', catchError(moviesV1.postMovieData))

// GET routes
routerV1.get('/movies', catchError(moviesV1.getMoviesList))

module.exports = routerV1

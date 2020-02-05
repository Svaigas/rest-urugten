import express from 'express'
const routerV1 = new express.Router()

import * as moviesV1 from './movies'

// POST routes
routerV1.post('/movies', moviesV1.postMovieData)

module.exports = routerV1
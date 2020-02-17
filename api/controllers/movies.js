import axios from 'axios'
import {} from 'dotenv/config'
import { normalizeParams, normalizeMovie, countParams } from '../middlewares/helpers'
import mongoose from 'mongoose'
import { Movie } from '../models/index'

const apiUrl = process.env.MOVIES_API
const apiKey = process.env.MOVIES_API_KEY
const mongoUser = process.env.MONGODB_USERNAME
const mongoPass = process.env.MONGODB_PASSWORD
const mongoUrl = process.env.MONGODB_ATLAS_URL

mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)
mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPass}@${mongoUrl}`)

export function getMoviesList(req, res) {
  const { page, perPage } = req.query
  const { parsedPerPage, skipped } = countParams(page, perPage)

  const query = Movie.find().sort('title').skip(skipped).limit(parsedPerPage)
  query.exec(function(err, movies) {
    if (err) res.sendStatus(500).json({ err })
    else res.json(movies)
  })
}

export function postMovieData(req, res) {
  const params = normalizeParams(req.body)
  axios.get(apiUrl, {
    params: {
      ...params,
      apikey: apiKey
    }
  }).then(function(axiosData) {
    const { data } = axiosData
    if (data.Response === 'False') {
      res.sendStatus(404)
    } else {
      return data
    }
  }).then(function(data) {
    const query = Movie.where({ imdbId: data.imdbID })
    query.findOne(function(err, movie) {
      if (err) {
        res.sendStatus(500).json({ err })
      } else if (movie) {
        res.json(movie)
      } else {
        const movie = new Movie(normalizeMovie(data))
        movie.save()
        res.json(data)
      }
    })
  }).catch((err) => {
    res.sendStatus(500).json({ err })
  })
}


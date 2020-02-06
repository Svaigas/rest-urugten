import mongoose from 'mongoose'

const movieSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  imdbId: String,
  year: String,
  rated: String,
  released: String,
  runtime: String,
  genre: String,
  director: String,
  writer: String,
  actors: String,
  plot: String,
  language: String,
  country: String,
  awards: String,
  poster: String,
  metascore: String,
  imdbRating: String,
  imdbVotes: String,
  type: String,
  dvd: String,
  boxOffice: String,
  production: String,
  website: String
})

export const Movie = mongoose.model('Movie', movieSchema)

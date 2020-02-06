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

const commentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  body: String,
  author: String,
  movieId: mongoose.Schema.Types.ObjectId
})

export const Movie = mongoose.model('Movie', movieSchema)
export const Comment = mongoose.model('Comment', commentSchema)

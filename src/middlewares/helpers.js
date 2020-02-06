import mongoose from 'mongoose'

export function catchError (cb) {
  return (req, res, next) => {
    Promise.resolve(cb(req, res, next))
      .catch(next)
  }
}

export function normalizeParams (reqParams) {
  return {
    i: reqParams.id,
    t: reqParams.title,
    type: reqParams.type,
    y: reqParams.year
  }
}

export function normalizeMovie (data) {
  return {
    _id: new mongoose.Types.ObjectId(),
    title: data.Title,
    imdbId: data.imdbID,
    year: data.Year,
    rated: data.Rated,
    released: data.Released,
    runtime: data.Runtime,
    genre: data.Genre,
    director: data.Director,
    writer: data.Writer,
    actors: data.Actors,
    plot: data.Plot,
    language: data.Language,
    country: data.Country,
    awards: data.Awards,
    poster: data.Poster,
    ratings: data.Ratings,
    metascore: data.Metascore,
    imdbRating: data.imdbRating,
    imdbVotes: data.imdbVotes,
    type: data.Type,
    dvd: data.DVD,
    boxOffice: data.boxOffice,
    production: data.Production,
    website: data.Website
  }
}

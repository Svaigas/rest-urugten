import mongoose from 'mongoose'

export function catchError(cb) {
  return (req, res, next) => {
    Promise.resolve(cb(req, res, next))
        .catch(next)
  }
}

export function normalizeParams(reqParams) {
  return {
    i: reqParams.id,
    t: reqParams.title,
    type: reqParams.type,
    y: reqParams.year
  }
}

export function normalizeMovie(movie) {
  return {
    _id: new mongoose.Types.ObjectId(),
    title: movie.Title,
    imdbId: movie.imdbID,
    year: movie.Year,
    rated: movie.Rated,
    released: movie.Released,
    runtime: movie.Runtime,
    genre: movie.Genre,
    director: movie.Director,
    writer: movie.Writer,
    actors: movie.Actors,
    plot: movie.Plot,
    language: movie.Language,
    country: movie.Country,
    awards: movie.Awards,
    poster: movie.Poster,
    ratings: movie.Ratings,
    metascore: movie.Metascore,
    imdbRating: movie.imdbRating,
    imdbVotes: movie.imdbVotes,
    type: movie.Type,
    dvd: movie.DVD,
    boxOffice: movie.boxOffice,
    production: movie.Production,
    website: movie.Website
  }
}

export function normalizeComment(comment) {
  return {
    _id: new mongoose.Types.ObjectId(),
    body: comment.body,
    author: comment.author,
    movieId: comment.movieId
  }
}

export function countParams(page, perPage) {
  const parsedPage = parseInt(page, 10)
  const parsedPerPage = parseInt(perPage, 10)
  const skipped = perPage * parsedPage

  return { parsedPerPage, skipped }
}

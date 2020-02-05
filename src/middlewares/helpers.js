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

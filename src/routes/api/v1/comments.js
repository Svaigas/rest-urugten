import { Comment } from '../../../models/index'
import { countParams, normalizeComment } from '../../../middlewares/helpers'

export function postCommentData(req, res) {
  const { body } = req
  const comment = new Comment(normalizeComment(body))
  comment.save()
      .then(function(comment) {
        res.json(comment)
      })
      .catch((err) => {
        res.sendStatus(500).json({ err })
      })
}

export function getCommentsList(req, res) {
  const { page, perPage } = req.query
  const { parsedPerPage, skipped } = countParams(page, perPage)

  const query = Comment.find().skip(skipped).limit(parsedPerPage)
  query.exec(function(err, comments) {
    if (err) res.sendStatus(500).json({ err })
    else res.json(comments)
  })
}

import jwt from 'jsonwebtoken'

export function loginUser(req, res) {
  const { body } = req
  const user = { email: body.email }
  jwt.sign({ user }, 'secret', { expiresIn: '30m' }, (err, token) => {
    if (err) res.sendStatus(500).json({ err })
    else res.json({ token })
  })
}

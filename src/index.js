import express from 'express'
import routesV1 from './routes/api/v1/routes'
import {} from 'dotenv/config'
import bodyParser from 'body-parser'

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use('/api/v1', routesV1)

app.listen(PORT, async () => {
  console.log(`Server is listening on port: ${PORT}`)
})

module.exports = app

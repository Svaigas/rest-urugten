import express from 'express'
import routesV1 from './routes/api/v1/routes'

const app = express()
const PORT = process.env.PORT || 3000

app.use('/api/v1', routesV1)

app.listen(PORT, async () => {
    console.log(`Server is listening on port: ${PORT}`)
})

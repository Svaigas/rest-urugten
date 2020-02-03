import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
    console.log(`Server is listening on port: ${PORT}`)
})
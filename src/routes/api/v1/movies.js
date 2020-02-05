import axios from 'axios'
import {} from 'dotenv/config'
import { normalizeParams } from '../../../middlewares/helpers'

const apiUrl = process.env.MOVIES_API
const apiKey = process.env.MOVEIS_API_KEY

export async function postMovieData(req, res) {
  const params = normalizeParams(req.body)
  const axiosCall = await axios.get(apiUrl, {
    params: {
      ...params,
      apikey: apiKey
    }
  })
  const { data } = axiosCall

  if(data.Response === 'False'){
    res.sendStatus(404)
  } else {
    res.json(data)
  }
}

export async function getMoviesList(req, res) {
  res.send(200)
}

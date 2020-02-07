import assert from 'assert'
import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../dist/index'

const should = chai.should()
const expect = chai.expect
chai.use(chaiHttp)
let token

describe('Tests rest-urugten REST API: ', function() {
  let movieId
  before(function() {
    chai.request(server)
      .post('/api/v1/login')
      .send({ email : 'test@test.com'})
      .end((err,res) => {
        if (err) throw new Error('NOT ABLE TO GET TOKEN!')
        else token = res.body.token
      })
  })

  describe('Movies: ', function() {
    it('GET : should get movies with provided perPage and page parameters', done => {
      chai.request(server)
        .get('/api/v1/movies')
        .set('Authorization', `Bearer ${token}`)
        .query({ page: 0, perPage: 1})
        .end(function (err, res) {
          expect(res.body.length).to.eq(1)
        })

      chai.request(server)
        .get('/api/v1/movies')
        .set('Authorization', `Bearer ${token}`)
        .query({ page: 0, perPage: 2})
        .end(function (err, res) {
          expect(res.body.length).to.eq(2)
          done()
        })
    })

    it('GET : should get movies without provided perPage and page parameters', done => {
      chai.request(server)
        .get('/api/v1/movies')
        .set('Authorization', `Bearer ${token}`)
        .end(function (err, res) {
          expect(res.body).to.not.be.empty
          done()
        })
    })

    it('POST : should fetch provided movie data, and save it to DB', done => {
      chai.request(server)
        .post('/api/v1/movies')
        .set('content-type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'Whatever' })
        .end(function (err, res) {
          expect(res.status).to.eq(200)
          expect(res.body).to.haveOwnProperty('title')
          expect(res.body.title).to.eq('Whatever')
          expect(res.body).to.haveOwnProperty('_id')
          movieId = res.body._id
          done()
        })
    })
  })

  describe('Comments: ', function() {
    it('POST : should create new comment provided for already created movie', done => {
      done()
    })
  })
})


const request = require('supertest')
const express = require('express')
const app = express()

const translateRoutes = require('../routes/translate')

//body-parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
//mount routers
app.use('/', translateRoutes)

describe('Test the /test1 path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/test1')
    expect(response.statusCode).toBe(200)
  })
})

describe('Test /test2 path', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/test2')
      .query({
        sourceText: 'My name is Ankit Singh',
        targetLanguage: 'fr',
      })
      .then((response) => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
})

describe('Test /test3 path', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/test3')
      .query({
        sourceText:
          'Hello, I am from Indian Institute of Technology, Kharagpur. Hope this is useful for you.',
        targetLanguage: 'pa',
      })
      .then((response) => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
})

describe('Test /test4 path', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/test4')
      .query({
        sourceText: 'आवश्यकता ही आविष्कार की जननी है',
        targetLanguage: 'en',
      })
      .then((response) => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
})

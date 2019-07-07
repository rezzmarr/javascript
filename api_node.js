const express = require('express')
const request = require('request-promise')
const port = 3000
const exphbs = require('express-handlebars')
const app = express()

const options = {
  method: 'GET',
  uri: 'https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  headers: {
    'Accept': 'image/png',
	'Transfer-Encoding': 'identity'
  }
}

app.get('/', (request, response) => {
	response.setHeader('Content-Type', 'image/png')
	makeRequest(response)
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})


function makeRequest(resp){
	request(options.uri, options).pipe(resp)
}





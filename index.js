const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/getUser', (req, res) => {
  res.send('hello world')
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
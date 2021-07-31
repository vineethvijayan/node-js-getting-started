const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/getUser', (req, res) => {

  const csv = require('csv-parser');
  const fs = require('fs');
  const fastcsv = require('fast-csv');

  var data = [];

  fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (row) => {
      console.log(row)
      data.push(row)
    })
    .on('end', () => {
      console.log('CSV file successfully processed')
      
      var firstItem = data[0];

      // remove first item in array
      data.shift()

      // write to csv file
      // fs.writeFile('data.csv', data, (err) => {
      //   if (err) throw err;
      //   console.log('The file has been saved!');
      // })
      console.log('firstItem')
      console.log(firstItem)

      const ws = fs.createWriteStream("data.csv");
      console.log('firstItem 1')
      fastcsv
        .write(data, { headers: true })
        .pipe(ws);

      res.send(firstItem)
    });
  
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
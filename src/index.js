
const express = require('express');
var morgan = require('morgan');
var path = require('path');
const handlebars = require('express-handlebars')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//get used for route
// app.get('/trang-chu', (req, res) => {
//   res.send('Hello World!')
// })

//template engine
// app.engine('hbs', handlebars({
//   extname: '.hbs'
// }));
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'resource/views'));

app.get('/', (req, res) => {
  // res.send(`
  //   <h1 style="color:red;">Hello World</h1>
  // `)
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
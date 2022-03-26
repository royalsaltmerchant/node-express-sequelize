const express = require('express')
const app = express()
const { engine } = require('express-handlebars')

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views')

//Set JSON parser
app.use(express.json())

// Routes
app.use('/api/users', require('./routes/api/users'))

//Main Static Page
app.get('/', (req, res) => {
  res.render('main', {layout : 'index'})
});


//Run
const PORT = 4000
app.listen({port: PORT}, async () => {
  console.log(`Server Running at http://localhost:${PORT}`)
})
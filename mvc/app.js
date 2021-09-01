const express = require('express')

const app = express()

app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')

require('./db/connection')                  // DB connection

const Dog = require('./models/Dog.model')   // Model




app.get('/', (req, res) => res.render('index-page'))

app.get('/perros', (req, res) => {

    Dog
        .find()
        .sort({ age: 1 })
        .then(dogs => res.render('dogs-page', { dogs }))
        .catch(err => console.log('error:', err))
})




app.listen(3000, () => console.log('Express server listening on port 3000'))
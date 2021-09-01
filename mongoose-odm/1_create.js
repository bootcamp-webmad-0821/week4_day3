// DB connection
require('./0_db-connection')


// Model
const Dog = require('./models/Dog.model')




// // .create()
// // argumento: objeto a crear en la BBDD
// // retorno: objeto creado en BBDD

// Dog
//     .create({ name: 'Popino', age: 14, city: 'Madrid', color: 'Marroncito toffe' })
//     .then(newDogFromDB => console.log('El nuevo perro es', newDogFromDB))
//     .catch(err => console.log('ERROR DE MONGOOSE ---- ', err))






// // .create()
// // argumento: array de objetos a crear en la BBDD
// // retorno: array de objetos creados en BBDD

Dog
    .create([
        { name: 'Lassie', age: 5, city: 'Gijón', color: 'Negro' },
        { name: 'Popino', age: 14, city: 'Madrid', color: 'Toffe y caramelo' },
        { name: 'Salchichonio', age: 14, city: 'Estepona', color: 'Toffe y caramelo' },
        { name: 'Scooby Doo', age: 1, city: 'Salamanca', color: 'Marroncito' },
        { name: 'Godzilla', age: 16, city: 'Bilbao', color: 'Toffe y caramelo' }
    ])
    .then(theNewDogs => theNewDogs.forEach(elm => console.log(`Este perro se llama ${elm.name}`)))
    .catch(err => console.log('ERROR DE MONGOOSE ---- ', err))
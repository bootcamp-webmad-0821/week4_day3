// DB connection
require('./0_db-connection')


// Model
const Dog = require('./models/Dog.model')



// // .findByIdAndUpdate()
// // Dos argumentos: string con ID, y query de manipulación
// // Por defecto, retorna el elemento anterior al update
// // El argumento adicional {new: true} hará que retorne el elemento tras el update

// Dog
//     .findByIdAndUpdate('612f3c431801c17d1f394874', { $inc: { age: 100 }, city: 'Oviedo' }, { new: true })
//     .then(dog => console.log("El perro modificado es:", dog))
//     .catch(err => console.log('Hubo un error', err))







// // .updateMany()
// // Recibe query, actualiza todos los documentos que hagan match
// // Retorna objeto con detalles de la operación

// Dog
//     .updateMany({ name: 'Popino' }, { name: 'Popino the best doggy' })
//     .then(details => console.log("Los detalles de la modificación son:", details))
//     .catch(err => console.log('Hubo un error', err))









// .updateOne()
// Recibe query, actualiza el primer match
// Retorna objeto con detalles de la operación

Dog
    .updateOne({ name: 'Salchichonio' }, { name: 'Salchichonio reloaded' })
    .then(info => console.log("Los detalles de la modificación son:", info))
    .catch(err => console.log('Hubo un error', err))

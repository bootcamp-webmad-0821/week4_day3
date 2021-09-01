const mongoose = require('mongoose')

const superDogSchema = new mongoose.Schema({
    name: {
        unique: true,
        type: String,
        required: true,
        default: 'Nombre desconocido',
        minlength: 2,
        maxlength: 100,
        trim: true,
        set: value => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
    },
    age: {
        type: Number,
        min: 1,
        max: 10
    },
    color: {
        type: String,
        enum: ['Marrón', 'Negro', 'Blanco', 'Varios']
    },
    chip: {
        type: String,
        match: /[0-6]{4}[A-C]/
    },
    email: {
        type: String,
        validate: {
            validator: value => value.endsWith('@ironhack.com'),
            message: 'Sólo perros con email corporativo, ¡HOMBRE YA!'
        }

    }
})

const Dog = mongoose.model('Dog', superDogSchema)

module.exports = Dog
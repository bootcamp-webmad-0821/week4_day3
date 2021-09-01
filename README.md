# week4_day3

## Main points: Mongoose

- Para gestionar una BBDD mediante mongoose es necesario:
  * Requerir `mongoose`
  * Conectarse a la BBDD mediante el método `.connect()`
  * Crear un modelo mediante el método `.model('Name', Schema)` en el directorio `models`, exportándolo mediante `module.exports`e importándolo en cualquier archivo mediante `require()`.
  * Utilizarlo con los métodos CRUD de Mongoose (todos retornan una promesa):
    * `.create()`
    * `.find()`
    * `.findOne()`
    * `.findById()`
    * `.updateOne()`
    * `.updateMany()`
    * `.findByIdAndUpdate()`
    * `.deleteOne()`
    * `.deleteMany()`
    * `.findByIdAndRemove()`
    * `.countDocuments()`
    

## Main points: chainable promises

- Las promesas permiten gestionar procesos asíncronos dependientes y secuenciales, donde un proceso no debe comenzar antes de que el anterior haya concluído.
- Pueden encadenarse tantos `.then()` como se deseen.
- Cuando uno de los `.then()` no puede cumplirse, salta automáticamente al próximo `.catch()`
- La función que recibe como argumento cada método `.then()` tiene como parámetro el retorno del anterior `.then()`


## Main points: MVC

- El Modelo Vista Controlador es un **patrón de diseño de software**:
  * La petición del cliente (`GET` o `POST`) es captada por el controlador (ruta).
  * El controlador hace uso del modelo para solicitar la información.
  * El modelo realiza la consulta a la BBDD.
  * El modelo recoge la respuesta de la BBDD y la envía al controlador.
  * El controlador envía los datos a la vista.
  * La vista integra los datos previo a ser devuelta al navegador para ser renderizada.
  
  ![MVC](https://i.imgur.com/LUhoPkS.png)

## Extra: Mongoose custom methods

Además de los métodos presentes por defecto en Mongoose, es posible dotar a los esquemas de métodos personalizados tanto estáticos como de instancia:



- Métodos estáticos: aplicados sobre el propio modelo

  ````javascript
  const userSchema = new mongoose.Schema({
      name: String,
      lastName: String,
      job: String
  })

  userSchema.statics.getUserComments = function(id) {      
      return mongoose.model('Comment').find({ user_id: id })
  }
  
  userSchema.statics.findByJob = function(jobSearched) {
      return this.find({ job: jobSearched })
  }
  
  const User = mongoose.model('User', userSchema)
  
  ````
  
  Uso:
  ````javascript
  const User = require('./../models/user.model.js')
  
  User
    .getUserComments('5a2539b41c574006c46f1a07')
    .then(comments => comments.forEach(elm => console.log(elm))
    
  User
    .findByJob('teacher')
    .then(users => users.forEach(elm => console.log(elm))
  ````
  
  

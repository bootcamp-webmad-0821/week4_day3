const Cat = mongoose.model('Cat', { name: String })



// Promesas anidadas: MAL!
Cat.collection.drop()
    .then(() => console.log("Colección vaciada"))
    .catch(err => console.log("Hubo un error!", err))



Cat
    .create({ name: 'Michifú' })
    .then(theCat => {
        console.log('El método .create() retorna el objeto de la BBDD:', theCat, 'El gato se llama', theCat.name)
        Cat.find()
            .then(allTheCats => {
                console.log("El método .find() retorna un Array", allTheCats)
                allTheCats.forEach(cat => console.log("Hay un gato llamado", cat.name))

                Cat.create([{ name: 'Belcebú' }, { name: 'Garfield' }])
                    .then(allNewCats => {
                        console.log("Los gatos nuevos son:", allNewCats)
                    })
                    .catch(err => console.log("Hubo un error!", err))
            })
            .catch(err => console.log("Hubo un error!", err))
    })
    .catch(err => console.log("Hubo un error!", err))









// Igual que arriba, pero encadenadas
// Cada .then() espera a que el anterior haya finalizado
// Cada .then() recibe como parámetro lo que el callback del anterior .then() retorna


Cat.collection.drop()
    .then(() => console.log("Colección vaciada"))
    .catch(err => console.log("Hubo un error!", err))


Cat.create({ name: 'Michifú' })
    .then(theCat => {
        console.log('El método .create() retorna el objeto de la BBDD:', theCat, 'El gato se llama', theCat.name)
        return Cat.find()
    })
    .then(allTheCats => {
        console.log("El método .find() retorna un Array", allTheCats)
        allTheCats.forEach(cat => console.log("Hay un gato llamado", cat.name))
        return Cat.create([{ name: 'Belcebú' }, { name: 'Garfield' }])
    })
    .then(allNewCats => console.log("Los gatos nuevos son:", allNewCats))
    .catch(err => console.log("Hubo un error!", err))








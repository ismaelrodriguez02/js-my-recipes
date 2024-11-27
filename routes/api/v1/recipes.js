const { request } = require('express')
const router = require('express').Router()
const recipes = require('../../../data/recipes.json')



router.get('/', (request, response)=>{
    const xRecipes = recipes.map((p)=>{
        return {id: p.id, title: p.title, image: p.image,prepTime: p.prepTime,difficulty: p.difficulty}
    }) 
    response.send(xRecipes) 
})

router.get('/recipe/:id', (request, response)=>{
    const { id } = request.params
    const found = recipes.find(p => p.id.toString() === id)
    if (found) {
       response.send(found)
    } else {
        response.send({error: "Error"})
    }  
})

router.post('/recipe/add', (request, response)=>{
 const {title, image, ingredients, instructions, prepTime, difficulty} = request.body

 recipes.push({id: recipes.length + 1, title, image, ingredients, instructions, prepTime, difficulty})
 
})


module.exports = router
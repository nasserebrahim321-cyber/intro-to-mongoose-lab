const mongoose = require('mongoose')
const recipe = require('./models/recipe')

async function createRecipe(newRecipe) {
    try {
        await recipe.create(newRecipe);
    }
    catch (err) {
        console.log(err)
    }
}

async function getAllRecipes() {
    try {
        const allRecipes = await recipe.find();
        const allRecipesFormated = allRecipes.map((r) => {
            return `${r.name} is an ${r.difficulty} recipe and takes ${r.prepTime} minutes to prepare`
        });
        console.log(allRecipesFormated);
    }
    catch (err) {
        console.log(err)
    }
}

async function getRecipeById(id) {
    try {
        const foundRecipe = await recipe.findById(id)
        console.log(foundRecipe)
    }
    catch (err) {
        console.log('No recipe with this ID exists.')
    }
}

async function updateRecipe(recipeId, newRecipeData) {
    try {
        const updatedRecipe = await recipe.findByIdAndUpdate(recipeId, newRecipeData, { new: true });
        console.log(updatedRecipe)
    }
    catch (err) {
        console.log('No recipe with this ID exists.')
    }
}

async function deleteRecipe(recipeId) {
    try {
        const deletedRecipe = await recipe.findByIdAndDelete(recipeId)
        console.log(deleteRecipe)
    }
    catch (err) {
        console.log('No recipe with this ID exists.')
    }
}

module.exports =
{
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
};
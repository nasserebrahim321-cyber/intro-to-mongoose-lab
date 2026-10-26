const dotenv = require('dotenv').config()
const connectToDB = require('./db')
const { createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe } = require('./recipeUtils')

connectToDB();

const newRecipe = {
    name: "Um Ali",
    instructions: "bake at 180C",
    prepTime: 120,
    difficulty: "Medium"
}

//createRecipe(newRecipe);


getAllRecipes();

getRecipeById('6adf37e7aad464191ef9a105')

const newRecipeData = {
    name: "Meatballs_Spaghetti",
    instructions: ["cook the meatballs first", "add the tomato sauce"],
    prepTime: 60,
    difficulty: "Easy"
}

//updateRecipe('6adf407dc1b5bc6c017d2cd7', newRecipeData)


//deleteRecipe('6adf41ef24a96e5bb1a0224b');


const mongoose = require('mongoose')
const recipeSchema = new mongoose.Schema({
    name: { type: String, require: true, minLength: 2, maxLength: 100 },
    instructions: [String],
    prepTime: { type: Number, require: true, min: 5, max: 500 },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'] }
}, { timestamps: true })

const recipe = mongoose.model('recipe', recipeSchema)
module.exports = recipe
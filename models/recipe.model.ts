import mongoose from "mongoose"

const RecipeSchema = new mongoose.Schema({
  name: String
});
const Recipe = mongoose.model("Recipe", RecipeSchema);

// module.exports = Recipe
export default Recipe
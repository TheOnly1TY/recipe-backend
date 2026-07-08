import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Recipe must have a name"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  servings: Number,
  cookingDuration: {
    type: Number,
    required: [true, "Recipe must have a cooking duration"],
  },
  imgCover: {
    type: String,
    required: [true, "Recipe must have an image cover"],
  },
  images: [String],
  category: {
    type: String,
    enum: {
      values: ["Breakfast", "Lunch", "Dinner", "Dessart"],
      message: "Category is either breakfast, lunch, dinner or dessert",
    },
  },
  difficulty: {
    type: String,
    enum: {
      values: ["Easy", "normal", "difficult"],
    },
  },
  ingredients: {
    type: [String],
    required: [true, "Recipe must have ingredients"],
  },
  instructions: {
    type: String,
    trim: true,
    required: [true, "Recipe must have instructions"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    timestamps: true
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
    timestamps: true
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

export default Recipe;

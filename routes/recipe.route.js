import express from "express";
import { getRecipes, createRecipe, getRecipe, deleteRecipe, updateRecipe, getStats } from "../controllers/recipe.controller.js";

const RecipeRouter = express.Router();

RecipeRouter.route('/get-stats').get(getStats)


RecipeRouter.route("/").get(getRecipes).post(createRecipe);


RecipeRouter.route("/:id").get(getRecipe).patch(updateRecipe).delete(deleteRecipe)

export default RecipeRouter;

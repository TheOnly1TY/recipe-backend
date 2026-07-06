import express from "express";
import { getRecipes } from "../controllers/recipe.controller.js";

const RecipeRouter = express.Router();

RecipeRouter.route("/").get(getRecipes);
// .post(recipeController.createTour);

// export {router};
export default RecipeRouter;

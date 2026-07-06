import morgan from 'morgan'
import RecipeRouter from "./routes/recipe.route.js"
import express from 'express'
const app = express();

app.use(express.json())
app.use(morgan('dev'));

app.use("/api/v1/recipes", RecipeRouter)


export default app


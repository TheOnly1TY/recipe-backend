import app from "../app.js"
import Recipe from "../models/recipe.model.js"
import type { Request, Response } from "express";

app.post("/api/v1/recipes", async (req: Request, res: Response) => {
  console.log("Hello from the pos request");
  try {
    const data = await Recipe.create(req.body);

    res.status(201).json({
      status: "Success",
      data,
    });
  } catch (err: unknown) {
    res.status(404).json({
      status: "Fail",
      message: err,
    });
  }
});

app.get("/api/v1/recipes", async (req: Request, res: Response) => {
  try {
const data  = await Recipe.find()

res.status(200).json({
  status: 'success',
  length: data.length,
  data
})
  }catch (err: unknown) {
res.status(404).json({
  status: 'fail',
  message: err
})
  }
} )
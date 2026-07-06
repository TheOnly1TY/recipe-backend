import app from "../app.js";
import Recipe from "../models/recipe.model.js";

// app.post("/api/v1/recipes", async (req, res) => {
//   console.log("Hello from the pos request");
//   try {
//     const data = await Recipe.create(req.body);

//     res.status(201).json({
//       status: "Success",
//       data,
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "Fail",
//       message: err,
//     });
//   }
// });

const getRecipes = async (req, res) => {
  try {
    const data = await Recipe.find();

    res.status(200).json({
      status: "success",
      length: data.length,
      data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export { getRecipes };

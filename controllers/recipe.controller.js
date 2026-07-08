import app from "../app.js";
import Recipe from "../models/recipe.model.js";
import APIFeatures from "../utils/apiFEATURES.js";

const getRecipes = async (req, res) => {
  try {
    const features = new APIFeatures(Recipe.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const data = await features.query;

    res.status(200).json({
      status: "success",
      message: "Recipes loaded",
      data: {
        length: data.length,
        rows: data,
      },

    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const getRecipe = async (req, res) => {
  try {
    const data = await Recipe.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const createRecipe = async (req, res) => {
  try {
    const newrecipe = await Recipe.create(req.body);

    res.status(201).json({
      status: "Success",
      data: { newrecipe },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const data = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: `Unable to update recipe "${err.message}"`,
    });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: `Unable to delete recipe ${err.message}`,
    });
  }
};

const getStats = async (req, res) => {
  try {
    const stats = await Recipe.aggregate([
    {
      $group: {
         _id: '$difficulty',
        avgcookingtime: {$avg: "$cookingDuration"}
      }
    }
  ])
   res.status(200).json({
    status: 'success',
    data: stats
  })
    }catch (err) {
      res.status(404).json({
        status: 'failed',
        message: err
      })
    } 
}

export { getRecipes, createRecipe, getRecipe, deleteRecipe, updateRecipe, getStats };
